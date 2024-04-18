import PriorityTag, { Priority } from "../text/PriorityTag";
import TaskLink from "./TaskLink";
import NextDue from "./NextDue";
import NextTaskContainer from "./NextTaskContainer";
import NextTaskTitle from "./NextTaskTitle";
import { PiCheck } from "react-icons/pi";
import SecondaryNextTaskContainer from "./SecondaryNextTaskContainer";

const SecondaryNextTask = () => {
  return (
    <SecondaryNextTaskContainer>
      <NextDue />
      <div>
        <div className="p-4 flex flex-col space-y-4">
          <PriorityTag priority={Priority.HIGH} />
          <div className="flex flex-col space-y-1">
            <NextTaskTitle>Threads Advertising Contract</NextTaskTitle>
            {/* <div>
              Draft and finalize advertising contract for Threads project.
              Specify terms, conditions, and deliverables. Collaborate with
              legal team and stakeholders for approval.
            </div> */}
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <TaskLink href="/task" external={false}>
              additional notes
            </TaskLink>
            <TaskLink href="/task" external={true}>
              contract draft
            </TaskLink>
          </div>
          <button className="self-end flex flex-row items-center space-x-2 w-fit rounded-full px-8 py-2 bg-emerald-600 text-emerald-100 border border-emerald-300 border-opacity-60 hover:bg-emerald-950 transition-all duration-200 ease-in-out">
            <div className="">
              <PiCheck />
            </div>
            <div>mark as done</div>
          </button>
        </div>
      </div>
    </SecondaryNextTaskContainer>
  );
};

export default SecondaryNextTask;
