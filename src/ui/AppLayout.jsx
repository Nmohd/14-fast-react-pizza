import Header from "./Header.jsx";
import Loader from "./Loader.jsx";
import CartOverview from "../features/cart/CartOverview.jsx";
import { Outlet, useNavigation } from "react-router-dom";


const AppLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
