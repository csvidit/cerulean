import PrimaryLink from "../Buttons/PrimaryLink";
import GridItem from "../grid/GridItem";
import GridItemsContainer from "../grid/GridItemsContainer";
import GridItemSubtitle from "../grid/GridItemSubtitle";
import Text from "../text/Text";

const LandingPage = () => {
  return (
    <>
      <div className="min-h-screen justify-center flex flex-col gap-4 lg:gap-8 self-center items-center">
        <div className="flex flex-col gap-1 lg:gap-2 self-center items-center">
          <h1 className="text-2xl lg:text-6xl font-medium tracking-tighter text-transparent bg-gradient-to-b from-gray-50 to-gray-400 bg-clip-text">
            Cerulean
          </h1>
          <div className="font-light text-xl lg:text-2xl text-gray-200">
            An elevated task management system
          </div>
        </div>

        <GridItemsContainer>
          <GridItem width={3} height={1}>
            <GridItemSubtitle>Task dependencies</GridItemSubtitle>
            <Text>Never get confused between what needs to be done first</Text>
          </GridItem>
          <GridItem width={3} height={1}>
            <GridItemSubtitle>Reminders</GridItemSubtitle>
            <Text>Per your requirements, sent via push notifications</Text>
          </GridItem>
          <GridItem width={3} height={1}>
            <GridItemSubtitle>Priority Tags</GridItemSubtitle>
            <Text>
              Get your list sorted automatically for you, based on urgency, due
              date, and so on
            </Text>
          </GridItem>
          <GridItem width={3} height={1}>
            <GridItemSubtitle>Customization</GridItemSubtitle>
            <Text>
              Add notes, files, and links to your tasks, and never go tab-diving
              again
            </Text>
          </GridItem>
        </GridItemsContainer>
        <PrimaryLink href="/signup">
          Get Started
        </PrimaryLink>
      </div>
    </>
  );
};

export default LandingPage;
