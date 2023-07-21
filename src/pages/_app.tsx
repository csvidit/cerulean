import { AuthContextProvider } from "@/AuthContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <MainContainer>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </MainContainer>
    </AuthContextProvider>
  );
}
