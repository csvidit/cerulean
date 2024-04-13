import Head from "next/head";
import MainContent from "@/components/containers/MainContent";
import Dashboard from "@/components/dashboard/Dashboard";
import LandingPage from "@/components/screens/LandingPage";

export default function Index() {
  return (
    <MainContent>
      <LandingPage />
    </MainContent>
  );
}
