import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import Product from "../pages/ProductDetails";
import About from "../pages/About";
import Articles from "../pages/Article";
import Account from "../pages/Account";
import { useAuth } from "../Contexts/Auth";
import ForgotPassword from "../Accounts/ForgotPassword";
import Profile from "../pages/Profile";

export const App = () => {
  const { currentUser } = useAuth()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/product/:sneakerId" element={<Product />} />
          <Route element={currentUser? <Navigate to="/products" /> : <Account/>}>
            <Route path="/login" element={<Account />} />
            <Route path="/signup" element={<Account />} />
          </Route>
          <Route element={currentUser === null ? <Navigate to="/login" /> : <Profile/>}>
            <Route path="/user" element={<Profile />} />
            <Route path="/update-user" element={<Profile />} />
          </Route>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/articles/:articleId" element={<Articles />} />
          <Route path="*" element={<NotFound />} />
        </Route>
  
      </Routes>
      <Outlet />
    </BrowserRouter>
  );
};