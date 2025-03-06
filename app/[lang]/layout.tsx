import type { Metadata } from "next";
import "@/public/css/globals.css";
import Navbar from "@/sections/Navbar";
import ToUp from "@/components/layout/ToUp";
import Providers from "./Providers";
import Footer from "@/sections/Footer";
import { getLocale } from "next-intl/server";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/sections/Header";

export const metadata: Metadata = {
  title: "Zed Games",
  description: "games encyclopedia",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await getLocale();
  return (
    <html
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
    >
      <body>
        <Providers>
          <Navbar />
          <Header />
          <div className="w-full">{children}</div>
          <Footer />
          <ToUp />
        </Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
