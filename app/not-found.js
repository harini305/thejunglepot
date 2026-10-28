import Link from "next/link";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="hero hero-short surface-deep">
      <div className="container hero-inner">
        <h1 className="hero-title">This path is overgrown</h1>
        <p className="hero-lead">The page you were looking for doesn’t exist or has moved.</p>
        <div className="actions">
          <Link prefetch={false} className="btn btn-primary" href="/">
            Back to home
          </Link>
          <Link prefetch={false} className="btn btn-outline" href="/contact">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
