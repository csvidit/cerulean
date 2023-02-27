import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <div className="flex flex-row justify-center self-center w-screen">
      <footer className="flex flex-col space-y-2 self-end p-4 items-end bg-neutral-200 dark:bg-neutral-900 dark:bg-opacity-30 bg-opacity-30 w-full text-neutral-900 dark:text-neutral-100 overflow-hidden">
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
