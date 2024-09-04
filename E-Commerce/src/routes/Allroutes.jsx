import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import About from '../components/layout/About';
import Contact from '../components/layout/Contact';
import { Layout } from "../layout";
import { HomePage, ProductsList } from '../pages';
import { Login } from '../pages/Auth/Login/Login';
import { Signup } from '../pages/Auth/Signup/Signup';
import CartCheckout from '../pages/Cart/components/CartCheckout';
import Checkout from '../pages/Checkout/Checkout';
import OrderPage from '../pages/Order/OrderPage';
import { PageNotFound } from "../pages/PageNotFound";
import ProductDetail from '../pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        index: true,
        element: <HomePage />
      },
      {
        path:"/products",
        element:<ProductsList />
      },
      {
        path: "/products/:id",
        element: <ProductDetail />
      },
      {
        path:"/about",
        element: <About />
      },
      {
        path:"contact",
        element: <Contact />
      },
      {
        path: "checkout",
        element: <Checkout />
      },
      {
        path:"/order",
        element: <OrderPage />
      },
      {
        path:"carrtCheckout",
        element: <CartCheckout />
      }
    ]
  },
  {
    path:"*",
    element: <PageNotFound />
  },
  {
    path:"/login",
    element: <Login />
  },
  {
    path:"/register",
    element: <Signup />
  }
])
export const AllRoutes = () => {

  return (
      <RouterProvider router={router} />
  );
};
