import Link from "next/link";
import { PiPlusCircleFill } from "react-icons/pi";
import Time from "./Time";

const Intro = () => {
  return (
    <div className="grid w-full grid-flow-col gap-8 overflow-x-scroll overflow-y-hidden">
      <div className="flex flex-row items-center p-4 space-x-8 bg-blue-300 rounded-2xl bg-opacity-30">
        <div className="text-4xl lg:text-6xl">
          <Time />
        </div>
        <div className="flex flex-col items-start space-y-2">
          <div className="text-xl lg:text-2xl">Good morning, Vidit.</div>
          <div>
            You have 5 tasks due today, with 2 more you can get ahead on.
          </div>
        </div>
      </div>
      <Link
        href="/new"
        className="flex flex-row items-center justify-center space-x-2 text-xl text-blue-100 transition-all duration-200 ease-in-out border-2 border-blue-900 shadow-inner group lg:text-2xl bg-gradient-to-b from-black via-black to-blue-950 hover:border-blue-800 shadow-blue-950 hover:text-blue-100 hover:text-white rounded-2xl"
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
