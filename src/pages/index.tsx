import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PiGoogleLogoBold, PiSignInDuotone } from "react-icons/pi";
import PrimaryLink from "@/components/PrimaryLink";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cerulean</title>
        <meta name="description" content="A Vidit Khandelwal Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent>
        <h1 className="text-4xl lg:text-6xl">the elevated to-do list</h1>
        <div className="text-xl lg:text-2xl flex flex-col space-y-2 w-1/2">
          <div>
            set priority levels, due dates, task dependencies, and progress markers for better
            organization.
          </div>
        </div>

        <PrimaryLink
          external={false}
          href="/signin"
          className="text-2xl"
          icon={
            <span className="text-blue-600">
              <PiGoogleLogoBold />
            </span>
          }
        >
          sign in to continue
        </PrimaryLink>
      </MainContent>
    </>
  );
}
