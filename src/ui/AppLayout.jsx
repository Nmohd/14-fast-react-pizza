import Header from "./Header.jsx";
import Loader from "./Loader.jsx";
import CartOverview from "../features/cart/CartOverview.jsx";
import { Outlet, useNavigation } from "react-router-dom";

const AppLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_4fr_auto]">
      {isLoading && <Loader />}
      {/* {true && <Loader />} */}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
        <CartOverview />
      </div>
    </div>
  );
};

export default AppLayout;
