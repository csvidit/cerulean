import { WiDayCloudy } from "react-icons/wi";
import Intro from "./Intro";
import NextTask from "./NextTask";

const Dashboard = () => {
  return (
    <>
      <h1 className="text-2xl lg:text-4xl font-medium">dashboard</h1>
      <Intro />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
        <div className="flex flex-col space-y-8 w-fit">
          <div className="text-2xl lg:text-4xl font-medium">recommended</div>
          <NextTask />
        </div>
        <div className="flex flex-col space-y-8 w-fit">
          <div className="text-2xl lg:text-4xl font-medium">next up</div>
          <NextTask />
        </div>
        <NextTask />
      </div>
      <div className="grid grid-cols-1 gap-8 w-full">
        <div className="text-2xl lg:text-4xl font-medium">this week</div>
        
      </div>
    </>
  );
};

export default Dashboard;
