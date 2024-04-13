import Head from "next/head";
import MainContent from "@/components/containers/MainContent";
import Dashboard from "@/components/dashboard/Dashboard";
import NewTask from "@/components/new-task/NewTask";

export default function New() {
  return (
    <MainContent>
      <NewTask />
    </MainContent>
  );
}
