import { Route, Routes } from 'react-router-dom';
import About from '../components/layout/About';
import Contact from '../components/layout/Contact';
import { HomePage, ProductsList } from '../pages';
import CartCheckout from '../pages/Cart/components/CartCheckout';
import Checkout from '../pages/Checkout/Checkout';
import { Login } from '../pages/Login';
import OrderPage from '../pages/Order/OrderPage';
import { PageNotFound } from "../pages/PageNotFound";
import ProductDetail from '../pages/ProductDetail';
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path='/login' element={<Login />} />
        <Route path="/cartCheckout" element={<CartCheckout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
