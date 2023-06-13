import "../globals.scss";
import { Inter } from "next/font/google";
import Header from "@/app/components/Header";
import { languages } from "../i18n/settings";
import GTAG from "../gtag";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RI0FS",
  description: "Экспедиция 5-18 августа",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return (
    <html lang={lang}>
      <GTAG />
      <body className={inter.className}>
        <Header lang={lang} />
        {children}
      </body>
    </html>
  );
}
