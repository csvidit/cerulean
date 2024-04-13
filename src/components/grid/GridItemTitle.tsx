import { cn } from "@/lib/utils";

const GridItemTitle = (props: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h2
      className={cn(
        "px-1 w-fit h-fit text-2xl lg:text-4xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-50 to-gray-400 py-2",
        props.className ? props.className : ""
      )}
    >
      {props.children}
    </h2>
  );
};

export default GridItemTitle;
