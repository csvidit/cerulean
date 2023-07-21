import styles from "./MainContainer.module.css";

const MainContainer = (props: { children: any }) => {
  return (
    <div
      className={`w-screen h-screen flex flex-col space-y-16 justify-center scroll-smooth font-light bg-gradient-to-br from-gray-950 to-blue-950 ${styles.main_container}`}
    >
      {props.children}
    </div>
  );
};

export default MainContainer;
