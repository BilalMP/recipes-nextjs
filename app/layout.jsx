import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Food Recipe App",
  description: "Food Recipe App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
