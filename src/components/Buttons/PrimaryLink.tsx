import Link from "next/link";
import { IconType } from "react-icons";

const PrimaryLink = (props: {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  external: boolean
  className?: string
}) => {
  return (
    <Link
      target={props.external ? "_blank" : ""}
      href={props.href}
      className={`group w-fit flex flex-row space-x-2 items-center pt-1 pb-1 pl-4 pr-4 lowercase rounded-full bg-blue-950 bg-opacity-90 text-gray-300 border-2 border-blue-950 border-opacity-90 hover:bg-gray-950 transition-all duration-200 ease-in-out ${props.className}`}
    >
      <span className="">{props.icon}</span>
      <p>{props.children}</p>
    </Link>
  );
};

export default PrimaryLink;
