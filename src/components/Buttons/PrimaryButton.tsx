const PrimaryLink = (props: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string
}) => {
  return (
    <button
      onClick={props.onClick}
      className={`w-fit flex flex-row space-x-2 items-center pt-1 pb-1 pl-4 pr-4 lowercase rounded-full bg-blue-950 bg-opacity-90 text-gray-300 border-2 border-blue-950 border-opacity-90 hover:bg-gray-950 transition-all duration-200 ease-in-out ${props.className}`}
    >
      {props.icon}
      <p>sign in</p>
    </button>
  );
};
