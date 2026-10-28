// Weekly timetable from docs/source-audit/content/retreat-schedule.json.
// Obvious label typos corrected ("Village Tracking" → Trekking, "Ice Batch" → Bath).
// "Kuangen" is kept as published; "Visit Kunang" had no price ("-").

export const SLOTS = ["09:00 – 10:00", "11:00 – 12:00", "13:30 – 14:30", "15:30 – 16:30"];

export const WEEK = [
  { day: "Monday", sessions: [["Morning Yoga", "350K"], ["School Orientation", "300K"], ["Water Purification", "390K"], ["Balinese Dress", "150K"]] },
  { day: "Tuesday", sessions: [["Morning Yoga", "350K"], ["Village Trekking", "650K"], ["Sound Healing", "600K"], ["Canang Sari", "300K"]] },
  { day: "Wednesday", sessions: [["Morning Yoga", "350K"], ["Cooking Class", "450K"], ["Water Sound Healing", "600K"], ["Gebogan", "900K"]] },
  { day: "Thursday", sessions: [["Morning Yoga", "350K"], ["Make Loloh", "300K"], ["Chakra Healing", "600K"], ["Kuangen", "200K"]] },
  { day: "Friday", sessions: [["Morning Yoga", "350K"], ["School Orientation", "300K"], ["Sleep Healing", "600K"], ["Balinese Dance", "700K"]] },
  { day: "Saturday", sessions: [["Morning Yoga", "350K"], ["Make Boreh", "300K"], ["Pranayama", "600K"], ["Visit Kunang", null]] },
  { day: "Sunday", sessions: [["Morning Yoga", "350K"], ["Make Dessert", "300K"], ["Yoga Open Air", "600K"], ["Ice Bath", "300K"]] },
];
