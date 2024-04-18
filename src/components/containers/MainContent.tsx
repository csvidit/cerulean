const MainContent = (props: { children: any }) => {
  return (
    <div className="w-11/12 self-center min-h-screen h-full flex flex-col space-y-8 bg-transparent text-neutral-900 dark:text-neutral-200">
      {props.children}
    </div>
  );
};

export default MainContent;
