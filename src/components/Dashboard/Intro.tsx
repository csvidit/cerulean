import Link from "next/link";
import { PiPlusCircleFill } from "react-icons/pi";

const Intro = () => {
  return (
    <div className="grid grid-flow-col gap-8 overflow-x-scroll overflow-y-hidden w-full">
      <div className="flex flex-row space-x-8 items-center p-4 rounded-2xl bg-blue-300 bg-opacity-30">
        <div className="text-4xl lg:text-6xl">2:30 PM</div>
        <div className="flex flex-col space-y-2 items-start">
          <div className="text-xl lg:text-2xl">Good morning, Vidit.</div>
          <div>
            You have 5 tasks due today, with 2 more you can get ahead on.
          </div>
        </div>
      </div>
      <Link
        href="/new"
        className="flex flex-row space-x-2 items-center justify-center group text-xl lg:text-2xl bg-gradient-to-b from-black via-black to-blue-950 shadow-inner border-2 border-blue-900 hover:border-blue-800 shadow-blue-950 hover:text-blue-100 text-blue-100 hover:text-white rounded-2xl transition-all duration-200 ease-in-out"
      >
        <div className="">
          <PiPlusCircleFill />
        </div>
        <div className="">New Task</div>
      </Link>
    </div>
  );
};

export default Intro;
