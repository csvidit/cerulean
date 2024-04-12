import styles from "./MainContainer.module.css";
import { Figtree } from "@next/font/google";
const figtree = Figtree({ subsets: ['latin'] });

const MainContainer = (props: { children: any }) => {
  return (
    <div
      className={`w-screen h-full min-h-screen flex flex-col space-y-32 justify-center scroll-smooth font-light bg-gradient-to-br from-gray-950 to-blue-950 ${figtree.className} ${styles.main_container}`}
    >
      {props.children}
    </div>
  );
};

export default MainContainer;
