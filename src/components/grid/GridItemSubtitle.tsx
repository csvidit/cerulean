import { cn } from "@/lib/utils";

const GridItemSubtitle = (props: {
  className?: string;
  as?: undefined | "div";
  children: React.ReactNode;
}) => {
  if (props.as === "div") {
    return (
      <div
        className={cn(
          "w-fit h-fit text-xl lg:text-2xl font-medium text-gray-100",

          props.className
        )}
      >
        {props.children}
      </div>
    );
  }

  return (
    <h2
      className={cn(
        "w-fit h-fit text-xl lg:text-2xl font-medium text-gray-100",

        props.className
      )}
    >
      {props.children}
    </h2>
  );
};

export default GridItemSubtitle;
