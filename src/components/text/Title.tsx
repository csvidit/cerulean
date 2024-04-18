import { cn } from "@/lib/utils";

const Title = (props: { className?: string; children: React.ReactNode }) => {
  return (
    <h1
      className={cn(
        "text-2xl lg:text-6xl font-medium tracking-tighter text-transparent bg-gradient-to-b from-gray-50 to-gray-400 bg-clip-text",
        props.className ? props.className : ""
      )}
    >{props.children}</h1>
  );
};

export default Title;
