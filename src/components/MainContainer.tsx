const MainContainer = (props: { children: any }) => {
  return (
    <div
      className={`w-screen h-full min-h-screen flex flex-col space-y-32 justify-center scroll-smooth font-light bg-gray-900`}
    >
      {props.children}
    </div>
  );
};

export default MainContainer;
