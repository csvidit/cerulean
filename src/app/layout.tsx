
import "./globals.css"
import { AuthContextProvider } from "@/AuthContext";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MainContainer from "@/components/MainContainer";
import { Metadata } from "next";
import { DM_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Cerulean",
  description: "Generated by create next app",
};

const dm_sans = DM_Sans({subsets: ["latin-ext"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <AuthContextProvider>
          <MainContainer>
            <Header />
            {children}
            <Footer />
          </MainContainer>
        </AuthContextProvider>
      </body>
    </html>
  );
}
