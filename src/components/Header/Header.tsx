"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  PiFingerprintBold,
  PiGoogleLogoBold,
  PiLightningADuotone,
  PiLightningDuotone,
  PiSignIn,
  PiWaves,
} from "react-icons/pi";
import { HiPencil, HiOutlineChevronDoubleLeft } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { useAuth } from "@/AuthContext";
import { auth } from "@/firebaseConfig";
import PrimaryLink from "../buttons/PrimaryLink";

const Header = () => {
  const { user, signout } = useAuth();
  const router = useRouter();
  const icon: IconType = PiSignIn;

  if (auth.currentUser === null) {
    // if (true) {
    return (
      <motion.div className="fixed top-0 z-10 flex flex-row items-center justify-between w-screen px-16 py-4 gap-2 bg-gray-900 h-max backdrop-blur-md dark:bg-opacity-30 bg-opacity-30">
        <div className="flex flex-row items-center space-x-2 lg:text-lg">
          <Link href="/">
            <div className="flex flex-row items-center space-x-2 text-gray-300 transition-all duration-200 ease-in-out hover:text-blue-600">
              <div className="font-medium tracking-tighter text-transparent bg-gradient-to-b from-gray-50 to-gray-400 bg-clip-text">
                Cerulean
              </div>
            </div>
          </Link>
        </div>
        <PrimaryLink
          href="/api/auth/login?"
          icon={
            <span className="text-gray-400">
              <PiFingerprintBold />
            </span>
          }
        >
          Sign In
        </PrimaryLink>
      </motion.div>
    );
  } else {
    const handleLogout = async () => {
      try {
        // await signout();
        router.push("/login");
      } catch (error: any) {
        console.log(error.message);
      }
    };

    return (
      <motion.div className="fixed top-0 z-10 flex flex-row items-center justify-between w-screen p-2 pl-5 pr-5 space-x-2 text-xl uppercase h-max lg:p-4 lg:text-2xl lg:pl-10 backdrop-blur-md bg-neutral-200 dark:bg-neutral-900 dark:bg-opacity-30 bg-opacity-30">
        <div className="flex flex-row items-center space-x-2">
          <Link href="/">
            <h1 className="font-medium text-neutral-900 dark:text-neutral-100 hover:text-purple-500">
              TODO
            </h1>
          </Link>
        </div>
        <div className="flex flex-row items-center space-x-2 text-base lg:text-xl">
          <a
            onClick={handleLogout}
            className="flex flex-row items-center pt-1 pb-1 pl-3 pr-3 space-x-2 text-purple-200 lowercase bg-purple-900 bg-opacity-50 rounded-full hover:bg-slate-900"
          >
            <span className="text-purple-500">
              <HiOutlineChevronDoubleLeft />
            </span>
            <p>signout</p>
          </a>
        </div>
      </motion.div>
    );
  }
};

export default Header;
