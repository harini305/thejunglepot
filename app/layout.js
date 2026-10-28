import { Philosopher } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import "./globals.css";

// One typeface for the whole site, chosen to match the logo's wordmark: flared,
// softly carved letters that stay readable at body sizes.
const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400"], // the design uses one weight; bold is never rendered
  style: ["normal", "italic"],
  variable: "--font-philosopher",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://thejunglepots.com"),
  title: {
    default: "LINGGA YOGA by The Jungle Pots — Retreat in Taro Village, Bali",
    template: "%s | LINGGA YOGA by The Jungle Pots",
  },
  description:
    "A forest retreat in Taro Village, Bali: Lingga Cottage, spa and sauna, a restaurant and bar, yoga, sacred rituals and Balinese cultural experiences.",
  openGraph: {
    siteName: "LINGGA YOGA by The Jungle Pots",
    type: "website",
    locale: "en_US",
  },
};

export const viewport = {
  themeColor: "#171d18",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={philosopher.variable}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Motion />
      </body>
    </html>
  );
}
