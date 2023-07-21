const MainContainer = (props: { children: any }) => {
  return (
    <div className="w-11/12 lg:w-10/12 h-full flex flex-col space-y-8 bg-transparent justify-center px-16 text-neutral-900 dark:text-neutral-200">
      {props.children}
    </div>
  );
};

export default MainContainer;
