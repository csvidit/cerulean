import { cn } from "@/lib/utils";

const GridItemsContainer = (props: {
  className?: string;
  children: React.ReactNode;
}) => {

  return (
    <div
      className={cn("min-w-full flex flex-col lg:grid lg:grid-cols-6 lg:auto-rows-max gap-2 lg:gap-4 content-center *:flex-shrink-0", props.className)}
    >
      {props.children}
    </div>
  );
};

export default GridItemsContainer;
