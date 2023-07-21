import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { PiGoogleLogoBold, PiSignIn, PiWaves } from "react-icons/pi";
import { HiPencil, HiOutlineChevronDoubleLeft } from "react-icons/hi2";
import { useRouter } from "next/router";
import { IconType } from "react-icons";
import { useAuth } from "@/AuthContext";
import { auth } from "@/firebaseConfig";
import PrimaryLink from "./PrimaryLink";

const Header = () => {
  const { user, signout } = useAuth();
  const router = useRouter();
  const icon: IconType = PiSignIn;

  if (auth.currentUser === null) {
    // if (true) {
    return (
      <motion.div className="z-10 flex flex-row space-x-2 justify-between items-center w-screen h-max text-xl lg:text-2xl fixed px-16 py-4 top-0 backdrop-blur-md bg-gray-900 dark:bg-opacity-30 bg-opacity-30">
        <div className="flex flex-row space-x-2 items-center">
          <Link href="/">
            <div className="flex flex-row space-x-2 items-center text-gray-300 hover:text-blue-600 transition-all duration-200 ease-in-out">
              <div><PiWaves/></div>
              <div>Cerulean</div>
            </div>
          </Link>
        </div>
        <div className="flex flex-row space-x-2 items-center text-base lg:text-xl">
          <PrimaryLink
            external={false}
            href="/"
            icon={
              <span className="text-blue-600">
                <PiGoogleLogoBold />
              </span>
            }
          >
            sign in
          </PrimaryLink>
        </div>
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
      <motion.div className="z-10 flex flex-row space-x-2 justify-between items-center w-screen h-max text-xl p-2 lg:p-4 lg:text-2xl uppercase fixed pl-5 pr-5 lg:pl-10 top-0 backdrop-blur-md bg-neutral-200 dark:bg-neutral-900 dark:bg-opacity-30 bg-opacity-30">
        <div className="flex flex-row space-x-2 items-center">
          <Link href="/">
            <h1 className="text-neutral-900 dark:text-neutral-100 hover:text-purple-500 font-medium">
              TODO
            </h1>
          </Link>
        </div>
        <div className="flex flex-row space-x-2 items-center text-base lg:text-xl">
          <a
            onClick={handleLogout}
            className="flex flex-row space-x-2 items-center pt-1 pb-1 pl-3 pr-3 lowercase rounded-full bg-purple-900 bg-opacity-50 text-purple-200 hover:bg-slate-900"
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
