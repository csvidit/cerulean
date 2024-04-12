import Head from "next/head";
import MainContent from "@/components/MainContent";
import Dashboard from "@/components/Dashboard/Dashboard";
import NewTask from "@/components/New/NewTask";

export default function New() {
  return (
    <MainContent>
      <NewTask />
    </MainContent>
  );
}
