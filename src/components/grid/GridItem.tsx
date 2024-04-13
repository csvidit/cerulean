import { cn } from "@/lib/utils";
import { getColSpan, getRowSpan } from "@/utils/grid";
import { GridHeight, GridWidth } from "@/utils/types/grid";
import { ReactNode } from "react";

type GridItemProps = {
  width: GridWidth;
  height: GridHeight;
  children: ReactNode;
  parentClassName?: string;
  className?: string;
  href?: string;
};
const GridItem = (props: GridItemProps) => {

  return (
    <div
      className={cn(
        "bg-gray-900 border border-gray-700 rounded-lg flex flex-col gap-2 lg:gap-4 p-2 lg:p-4",
        getRowSpan(props.height),
        getColSpan(props.width),
        props.parentClassName ? props.parentClassName : ""
      )}
    >
        {props.children}
    </div>
  );
};

export default GridItem;
