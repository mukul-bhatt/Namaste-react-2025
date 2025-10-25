import Header from "./Header";
import { Outlet } from "react-router";
import {Provider} from "react-redux";
import store from "../utils/appStore";



const AppLayout = () => {

  return (

    <Provider store={store}>
    <div className="app">
      <Header /> 
      <Outlet />
    </div>
    </Provider>
  );
};

export default AppLayout;
