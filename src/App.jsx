import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Four404 from './pages/Four404';
import Header from './component/Header';
import Footer from './component/Footer';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import SignlePage from './pages/SignlePage';
import Myaccount from './pages/Myaccount';
import Address from './pages/Address';
import Signup from './pages/Signup';
import Login from './pages/Login';
import './App.css';
import ProtectedRoutes from './context/ProtectedRoutes';
import AuthProvider from './context/authContext';
import ProductProvider from './context/ProductContext';

const App = () => {
  const location = useLocation();
  const noHeaderFooterPaths = ['/sign-up', '/sign-in'];

  const shouldShowHeaderFooter = !noHeaderFooterPaths.includes(location.pathname);

  return (
    <div>
      {shouldShowHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<SignlePage />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/address" element={<Address />} />
          <Route path="/myaccont" element={<Myaccount />} />
        </Route>
        <Route path="*" element={<Four404 />} />
      </Routes>
      {shouldShowHeaderFooter && <Footer />}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <AuthProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </AuthProvider>
  </Router>
);

export default AppWrapper;
