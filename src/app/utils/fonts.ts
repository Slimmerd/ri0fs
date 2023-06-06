import { Montserrat, Roboto } from "next/font/google";

export const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--montserrat-font",
});
export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--roboto-font",
});