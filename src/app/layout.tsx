import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainContainer from "@/components/containers/MainContainer";
import { Metadata } from "next";
import { DM_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Cerulean",
  description: "Generated by create next app",
};

const dm_sans = DM_Sans({ subsets: ["latin-ext"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <MainContainer>
          <Header />
          {children}
          <Footer />
        </MainContainer>
      </body>
    </html>
  );
}
