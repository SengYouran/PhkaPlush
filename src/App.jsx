import { Home, New_Arrival, On_sale, Context_us } from "./Page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Order_Product from "./Shop/Oder_Product";
import Product from "./Shop/Product";
import Error from "./Error/Error";
import "./App.css";
import RootLayout from "./rootLayout/RootLayout";
import Shop from "./rootLayout/Shop";
import Checkout from "./Checkout/Checkout";
import Account from "./Account/Account";
import ControllAccount from "./Account/ControllAccount";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Product />,
          },
          {
            path: ":id",
            element: <Order_Product />,
            errorElement: <Error />,
          },
        ],
      },
      {
        path: "new_arrival",
        element: <New_Arrival />,
      },
      {
        path: "on_sale",
        element: <On_sale />,
      },
      {
        path: "context_us",
        element: <Context_us />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "account",
        element: <Account />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <ControllAccount />,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
