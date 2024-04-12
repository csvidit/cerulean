import Link from "next/link";
import { PiArrowRight, PiArrowUpRight } from "react-icons/pi";

const TaskLink = (props: {
  href: string;
  children: React.ReactNode;
  external: boolean;
  className?: string;
}) => {
  return (
    <Link
      target={props.external ? "_blank" : ""}
      href={props.href}
      className={`group w-fit flex flex-row space-x-2 items-center px-4 lowercase rounded-full bg-blue-950 bg-opacity-90 text-gray-300 border border-blue-950 border-opacity-90 hover:bg-gray-950 transition-all duration-200 ease-in-out ${props.className}`}
    >
      <div className="flex-wrap inline-flex space-x-2 items-center">{props.children}</div>
      <span className="text-blue-600">{props.external ? <PiArrowUpRight/> : <PiArrowRight/>}</span>
    </Link>
  );
};

export default TaskLink;
