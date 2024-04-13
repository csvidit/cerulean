import { cn } from "@/lib/utils";

const Text = (props: {
  children: React.ReactNode;
  as?: "p" | "div";
  className?: string;
}) => {
  if (props.as === "div") {
    return (
      <div className={cn("text-gray-100", props.className)}>
        {props.children}
      </div>
    );
  }

  return (
    <p className={cn("text-gray-100", props.className)}>
      {props.children}
    </p>
  );
};

export default Text;
