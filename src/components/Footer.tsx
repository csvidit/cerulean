import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <div className="flex flex-row justify-center self-center w-screen">
      <footer className="flex flex-col space-y-2 self-end items-end border-t border-t-gray-600 w-full text-gray-300 overflow-hidden mx-16 py-4">
        <div className="flex flex-row space-x-2 items-center font-extralight">
          <h2 className="text-2xl">A VIDIT KHANDELWAL PROJECT</h2>
        </div>
        <div className="flex flex-row space-x-1 items-center text-neutral-900 dark:text-neutral-100 font-light">
          <Link href="https://github.com/csvidit/todo">
            check out this project&apos;s repository
          </Link>
          <HiArrowUpRight />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
