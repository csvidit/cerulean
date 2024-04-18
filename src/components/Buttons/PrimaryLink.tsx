import Link from "next/link";
import { IconType } from "react-icons";

const PrimaryLink = (props: {
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link
      target={props.href.startsWith("https?") ? "_blank" : "_self"}
      href={props.href}
      className={`font-medium group w-fit flex flex-row space-x-2 items-center px-4 py-1 rounded-full bg-gray-100 text-gray-900 border-blue-950 border-opacity-90 hover:bg-gray-300 transition-all duration-200 ease-in-out ${props.className}`}
    >
      {props.icon && <span className="*:transition-all *:duration-200 *:ease-in-out" >{props.icon}</span>}
      <p>{props.children}</p>
    </Link>
  );
};

export default PrimaryLink;
