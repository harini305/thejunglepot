"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/Icons";
import { mailtoLink, whatsappLink } from "@/lib/site";
import styles from "./contact.module.css";

const TOPICS = ["Lingga Cottage stay", "Spa treatment", "Restaurant table", "Daily Retreat", "Yoga", "Rituals & culture", "Cooking class", "Trekking", "Camping & outbound", "Other question"];

// No backend: the form composes a message and hands it to WhatsApp or the visitor's email app.
// The original site's form endpoint could not be verified during the audit.
// The form is part of the static page; a ?subject= pre-fill is applied after load so the
// page height never changes when the script runs.
export default function EnquiryForm() {
  const [preset, setPreset] = useState("");
  const [topic, setTopic] = useState(TOPICS[0]);
  const [error, setError] = useState("");

  useEffect(() => {
    const subject = new URLSearchParams(window.location.search).get("subject") || "";
    if (!subject) return;
    const matched = TOPICS.find((t) => subject.toLowerCase().includes(t.toLowerCase()));
    setPreset(subject);
    setTopic(matched || "Other question");
  }, []);

  const compose = (form) => {
    const data = new FormData(form);
    const name = data.get("name").trim();
    const message = data.get("message").trim();
    if (!name || !message) {
      setError("Please add your name and a short message.");
      return null;
    }
    setError("");
    const lines = [
      `Hello, my name is ${name}.`,
      `Enquiry: ${data.get("topic")}${preset ? ` (${preset})` : ""}`,
      data.get("date") ? `Preferred date: ${data.get("date")}` : null,
      data.get("guests") ? `Guests: ${data.get("guests")}` : null,
      "",
      message,
    ].filter((l) => l !== null);
    return { subject: `Enquiry: ${data.get("topic")}`, body: lines.join("\n") };
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const msg = compose(e.currentTarget);
    if (!msg) return;
    const via = e.nativeEvent.submitter?.value;
    if (via === "email") {
      window.location.href = mailtoLink(msg.subject, msg.body);
    } else {
      window.open(whatsappLink(msg.body), "_blank", "noopener,noreferrer");
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="topic">What would you like to book or ask about?</label>
        <select id="topic" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
          {TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>
      <div className={styles.row}>
        <div className="field">
          <label htmlFor="date">Preferred date (optional)</label>
          <input id="date" name="date" type="text" placeholder="e.g. 12 March, morning" />
        </div>
        <div className="field">
          <label htmlFor="guests">Guests (optional)</label>
          <input id="guests" name="guests" type="number" min="1" inputMode="numeric" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
      </div>
      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}
      <div className="actions">
        <button className="btn btn-primary" type="submit" value="whatsapp">
          <WhatsAppIcon />
          Continue in WhatsApp
        </button>
        <button className="btn btn-outline" type="submit" value="email">
          Send by email
        </button>
      </div>
      <p className="field-hint">
        Nothing is sent from this page. Your message opens in WhatsApp or your email app, ready for you to send.
      </p>
    </form>
  );
}
