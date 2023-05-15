import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dishes - form",
  description:
    "This is a form application built using Next.js, Tailwind.css, and React-final-form. It allows users to create and submit dish information, including dish name, preparation time, dish type, and additional details specific to each dish type. The form dynamically adjusts its fields based on the selected dish type, offering a seamless user experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
