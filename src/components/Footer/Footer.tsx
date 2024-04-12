import Link from "next/link";
import { PiArrowUpRight, PiLightningDuotone, PiWaves } from "react-icons/pi";
import SecondaryLink from "../Buttons/SecondaryLink";

const Footer = () => {
  return (
    <div className="flex flex-row justify-center self-center w-screen">
      <footer className="flex flex-col space-y-2 self-end items-end border-t border-t-gray-600 w-full text-gray-300 overflow-hidden mx-16 py-4">
        <div className="flex flex-col space-y-1 items-end text-blue-300">
          <div className="flex flex-row space-x-2 items-center">
            <div>
              <PiLightningDuotone />
            </div>
            <div className="">cerulean task management system</div>
          </div>
        </div>
        <SecondaryLink external={true} href="https://github.com/csvidit/todo">
          github repository
        </SecondaryLink>
        <div className="flex flex-row flex-wrap space-x-2">
          <div>a</div>
          <SecondaryLink
            inline
            external={true}
            href="https://viditkhandelwal.com"
          >
            vidit khandelwal
          </SecondaryLink>{" "}
          <div>project</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
