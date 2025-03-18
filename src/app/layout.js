import { Navbar } from "@/components";
import "./globals.css";


export const metadata = {
  title: "NextJSApp",
  description: "Genereated by love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
