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
import Wishlist from "./Page/Wishlist";
import Profile from "./Account/Profile";
import Ordered from "./Account/Ordered";
import GiftCard from "./Account/GiftCard";
import Password from "./Account/Password";
import AddressBook from "./Account/AddressBook";
import { Navigate } from "react-router-dom";
import DetailPurchased from "./Account/DetailPurchased";
import FAQsGuides from "./Account/FAQsGuides";
import FindStore from "./AboutCompany/FindStore";
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
            element: <Navigate to="editprofile" replace />,
          },
          {
            path: "editprofile",
            element: <Profile />,
          },
          {
            path: "orders",
            element: <Ordered />,
            errorElement: <Error />,
            children: [
              {
                path: "detail/:id",
                element: <DetailPurchased />,
              },
            ],
          },
          { path: "giftcard", element: <GiftCard /> },
          { path: "addressbook", element: <AddressBook /> },
          { path: "password", element: <Password /> },
          { path: "faqguides", element: <FAQsGuides /> },
        ],
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "store-locator",
        element: <FindStore />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
