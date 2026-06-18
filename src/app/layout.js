import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.rahulduggal.me"),
  title: {
    default: "Rahul Duggal",
    template: "%s · Rahul Duggal",
  },
  description:
    "Rahul Duggal, a researcher building an app that translates the slurred speech of people with dysarthria into clear, understandable speech. Also built Joygram and PoolShark.",
  openGraph: {
    title: "Rahul Duggal",
    description:
      "A researcher building an app that translates the slurred speech of people with dysarthria into clear, understandable speech. Also built Joygram and PoolShark.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
