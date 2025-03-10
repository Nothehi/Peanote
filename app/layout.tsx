import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peanote App",
  description: "The best music training app in Iran.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="container h-screen max-w-md mx-auto overflow-x-hidden overflow-y-auto"
        dir="rtl"
      >
        {children}
      </body>
    </html>
  );
}
