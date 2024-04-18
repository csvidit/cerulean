const PageContent = (props: { children: any }) => {
    return (
      <div className="w-full self-center min-h-screen pt-24 h-full flex flex-col gap-8 *:text-gray-100">
        {props.children}
      </div>
    );
  };
  
  export default PageContent;
  