import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Intro from "./intro/Intro";
import NextTask from "./NextTask";
import Title from "../text/Title";
import PageContent from "../containers/PageContent";

const Dashboard = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (user) {
    return (
      <>
        <PageContent>
          <Title>Dashboard</Title>
          <Intro user={user} />
          <div className="grid w-full grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="flex flex-col space-y-8 w-fit">
              <div className="text-2xl font-medium lg:text-4xl">
                recommended
              </div>
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
        </PageContent>
      </>
    );
  }
};

export default Dashboard;
