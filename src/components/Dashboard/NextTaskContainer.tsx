const NextTaskContainer = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex w-fit max-w-2xl flex-col space-y-4 rounded-2xl bg-blue-300 bg-opacity-30 border border-blue-300 border-opacity-60">
      {props.children}
    </div>
  );
};

export default NextTaskContainer;
