import { PiGoogleLogoBold } from "react-icons/pi";
import PrimaryLink from "../Buttons/PrimaryLink";

const Hero = () => {
  return (
    <>
      <h1 className="nav_title text-4xl lg:text-6xl">
        the elevated to-do list
      </h1>
      <div className="text-xl lg:text-2xl flex flex-col space-y-2 w-1/2">
        <div>
          set priority levels, due dates, task dependencies, and progress
          markers for better organization.
        </div>
      </div>

      <PrimaryLink
        external={false}
        href="/signin"
        className="text-2xl"
        icon={
          <span className="text-blue-600">
            <PiGoogleLogoBold />
          </span>
        }
      >
        sign in to continue
      </PrimaryLink>
    </>
  );
};

export default Hero;
