import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./src/components/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router";
import Body from "./src/components/Body";
import AboutUs from "./src/components/AboutUs";
import ContactUs from "./src/components/ContactUs";
import Error from "./src/components/Error";
import RestaurantDetails from "./src/components/RestaurantDetails";
// import Grocery from "./src/components/Grocery";

const Grocery = lazy(() => import("./src/components/Grocery"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Body />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/restaurant/:restaurantId"
          element={<RestaurantDetails />}
        />
        <Route
          path="/grocery"
          element={
            <Suspense fallback={<h1>Loading.....</h1>}>
              <Grocery />
            </Suspense>
          }
        />

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
