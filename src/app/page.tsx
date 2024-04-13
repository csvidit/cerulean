import Head from "next/head";
import MainContent from "@/components/MainContent";
import Dashboard from "@/components/Dashboard/Dashboard";
import LandingPage from "@/components/screens/LandingPage";

export default function Index() {
  return (
    <MainContent>
      <LandingPage />
    </MainContent>
  );
}
