import { GridWidth } from "./types/grid";

export const getColSpan = (width: GridWidth) => {
  switch (width) {
    case 1:
      return "lg:col-span-1";
    case 2:
      return "lg:col-span-2";
    case 3:
      return "lg:col-span-3";
    case 4:
      return "lg:col-span-4";
    case 5:
      return "lg:col-span-5";
    case 6:
      return "lg:col-span-6";
  }
};

export const getRowSpan = (height: GridWidth) => {
  switch (height) {
    case 1:
      return "lg:row-span-1";
    case 2:
      return "lg:row-span-2";
    case 3:
      return "lg:row-span-3";
    case 4:
      return "lg:row-span-4";
    case 5:
      return "lg:row-span-5";
    case 6:
      return "lg:row-span-6";
  }
};

