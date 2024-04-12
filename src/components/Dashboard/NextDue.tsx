import { PiClockAfternoonDuotone } from "react-icons/pi";
import PriorityTag, { Priority } from "../PriorityTag";

const NextDue = () => {
  return (
    <div className="flex flex-row rounded-t-2xl border-b border-blue-300 border-opacity-60">
      <div className="flex flex-row space-x-1 items-center px-4 py-2 rounded-tl-2xl bg-blue-950 bg-opacity-60">
        <PiClockAfternoonDuotone />
        <div className="">DUE AT</div>
      </div>
      <div className="px-4 py-2 flex flex-row space-x-2 items-baseline">
        <div className="font-medium text-xl">5:00 PM</div>
        <div>today, EST</div>
        {/* <div className="self-center">
          <PriorityTag priority={Priority.HIGH} />
        </div> */}
      </div>
    </div>
  );
};

export default NextDue;
