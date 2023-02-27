import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <motion.div className="z-10 flex flex-row space-x-2 items-start w-screen h-max text-xl p-2 lg:p-4 lg:text-2xl uppercase fixed pl-5 pr-5 lg:pl-10 top-0 backdrop-blur-md bg-neutral-200 dark:bg-neutral-900 dark:bg-opacity-30 bg-opacity-30">
      <motion.div className="flex flex-col space-y-1">
        <motion.h1 className="text-neutral-900 dark:text-neutral-100 font-light">
        </motion.h1>

        <motion.div className="border-t border-t-neutral-900 dark:border-t-neutral-100 w-0 z-0 h-1/2 bg-neutral-900 dark:bg-neutral-100"></motion.div>
      </motion.div>
      <div className="flex flex-row space-x-2 items-center">
        <h1 className="text-neutral-900 dark:text-neutral-100 font-medium">
          TODO
        </h1>
      </div>
    </motion.div>
  );
};

export default Header;
