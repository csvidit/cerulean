const PrimaryLink = (props: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={props.onClick}
      className="w-fit flex flex-row space-x-2 items-center pt-1 pb-1 pl-3 pr-3 lowercase rounded-full bg-blue-900 bg-opacity-60 text-blue-200 hover:bg-gray-950 transition-all duration-200 ease-in-out"
    >
      {props.icon}
      <p>sign in</p>
    </button>
  );
};
