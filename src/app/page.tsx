import MainContent from "@/components/containers/MainContent";
import Dashboard from "@/components/dashboard/Dashboard";
import LandingPage from "@/components/screens/LandingPage";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";

export default async function Index() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const authState = await isAuthenticated();
  const user = await getUser();

  if (user) {
    return (
      <MainContent>
        <Dashboard />
      </MainContent>
    );
  }

  return (
    <MainContent>
      <LandingPage />
    </MainContent>
  );
}
