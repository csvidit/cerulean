import { PiLightningDuotone } from "react-icons/pi";
import SecondaryLink from "../Buttons/SecondaryLink";

const Footer = () => {
  return (
    <div className="flex flex-row self-center justify-center w-screen">
      <footer className="flex flex-col items-end self-end w-full py-4 mx-16 space-y-2 overflow-hidden text-gray-300 border-t border-t-gray-600">
        <div className="flex flex-col items-end space-y-1 text-blue-300">
          <div className="flex flex-row items-center space-x-2">
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
