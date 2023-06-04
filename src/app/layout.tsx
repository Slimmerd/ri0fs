import "./globals.scss";
import { Inter } from "next/font/google";
import Header from "@/app/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RI0FS",
  description: "Экспедиция 5-18 августа",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
