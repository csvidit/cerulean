import Head from "next/head";
import MainContent from "@/components/MainContent";
import Dashboard from "@/components/Dashboard/Dashboard";

export default function Index() {
  return (
    <MainContent>
      <Dashboard />
    </MainContent>
  );
}
