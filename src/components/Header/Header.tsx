"use client";

import Link from "next/link";
import { PiFingerprintBold, PiSignOut } from "react-icons/pi";
import PrimaryLink from "../buttons/PrimaryLink";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Header = () => {
  const { user } = useKindeBrowserClient();

  if (!user) {
    return (
      <div className="fixed top-0 z-10 flex flex-row items-center justify-between w-screen px-16 py-4 gap-2 bg-gray-900 h-max backdrop-blur-md dark:bg-opacity-30 bg-opacity-30">
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
            <PiFingerprintBold className="text-gray-400 group-hover:text-gray-600" />
          }
        >
          Sign In
        </PrimaryLink>
      </div>
    );
  } else {
    return (
      <div className="fixed top-0 z-10 flex flex-row items-center justify-between w-screen px-16 py-4 gap-2 bg-gray-900 h-max backdrop-blur-md dark:bg-opacity-30 bg-opacity-30">
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
          href="/api/auth/logout?"
          icon={
            <PiSignOut className="text-gray-400 group-hover:text-gray-600" />
          }
        >
          Sign Out
        </PrimaryLink>
      </div>
    );
  }
};

export default Header;
