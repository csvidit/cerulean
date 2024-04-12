import Intro from "./intro/Intro";
import NextTask from "./NextTask";

const Dashboard = () => {
  return (
    <>
      <h1 className="text-2xl font-medium lg:text-4xl">dashboard</h1>
      <Intro />
      <div className="grid w-full grid-cols-1 gap-16 lg:grid-cols-2">
        <div className="flex flex-col space-y-8 w-fit">
          <div className="text-2xl font-medium lg:text-4xl">recommended</div>
          <NextTask />
        </div>
        <div className="flex flex-col space-y-8 w-fit">
          <div className="text-2xl font-medium lg:text-4xl">next up</div>
          <NextTask />
        </div>
        <NextTask />
      </div>
      <div className="grid w-full grid-cols-1 gap-8">
        <div className="text-2xl font-medium lg:text-4xl">this week</div>
        
      </div>
    </>
  );
};

export default Dashboard;
