import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MUHASSO - Muhimbili University Students' Organization",
  description: "MUHASSO - Muhimbili University Students' Organization",
  icons: {
    icon: '/asscociation_details/muhasso_logo.png',
    shortcut: '/asscociation_details/muhasso_logo.png',
    apple: '/asscociation_details/muhasso_logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
