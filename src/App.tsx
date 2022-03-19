import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Category from "./Pages/Category/Category";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard";
import FAQ from "./Pages/FAQ/FAQ";
import { Home } from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
import Shop from "./Pages/Shop/Shop";
import SignUp from "./Pages/SignUp/SignUp";
import Terms from "./Pages/Terms/Terms";
import Blog from "./Pages/Blogs/Blogs";
import Seller from "./Pages/Seller/Seller";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import AccountDetails from "./Components/Dashboard/AccountDetails/AccountDetails";
import AddProduct from "./Components/Dashboard/AddProduct/AddProduct";
import Address from "./Components/Dashboard/Address/Address";
import CategoryList from "./Components/Dashboard/CategoryList/CategoryList";
import AddCategroy from "./Components/Dashboard/AddCategory/Category";
import Order from "./Components/Dashboard/Order/Order";
import ProductApproval from "./Components/Dashboard/ProductApproval/ProductApproval";
import ProductList from "./Components/Dashboard/ProductList/ProductList";
import SellerList from "./Components/Dashboard/SellerList/SellerList";
import Welcome from "./Components/Dashboard/Welcome/Welcome";
import TrackOrder from "./Components/Dashboard/TrackOrder/TrackOrder";
import AuthProvider from "./context/AuthProvider";
import NotFound from "./Pages/NotFound/NotFound";
import EditProduct from "./Components/Dashboard/AddProduct/EditProduct";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import Sponsor from "./Components/Sponsor/Sponsor";
import FeaturedProducts from "./Components/Dashboard/FeaturedProducts/FeaturedProducts";
import Deals from "./Pages/Deals/Deals";
import Messenger from "./Components/Messenger/Messenger";
import Promotions from "./Components/Promotions/Promotions";
import SupportCenter from "./Components/SupportCenter/SupportCenter";
import PrivateOutlet from "./Components/PrivateOutlet/PrivateOutlet";
import Checkout from "./Pages/Checkout/Checkout";
import CategorizedShop from "./Pages/CategorizedShop/CategorizedShop";

import ViewCart from "./Pages/ViewCart/ViewCart";

function App() {
  interface IProducts {
    _id: string;
    ProductTitle: string,
    Category: string,
    Stock: number,
    image: string,
    rating: number,
    shortDescription: string,
    additionalInfo: string,
    regularPrice: number,
    discountPrice: number,
    discountPercentage: number,
    sku: string,
    isApproved: boolean,
    adminChecked: boolean,
    sellerID: string,
    quantity: number,
}

  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsors" element={<Sponsor />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/supportCenter" element={<SupportCenter />} />
          <Route path="/sponsors" element={<Sponsor />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="category" element={<Category />} />
          <Route path="category/:categoryName" element={<Category />} />
          <Route path="shop" element={<Shop />} />
          <Route path="deals" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="seller" element={<Seller />} />
          <Route path="singleProduct/:productID" element={<SingleProduct />} />
          <Route path="login" element={<LogIn />} />
          <Route path="singUp" element={<SignUp />} />
          <Route path="terms" element={<Terms />} />
          <Route path="categoryWise/:id" element={<CategorizedShop />} />

          <Route path="/*" element={<PrivateOutlet /> }>

            <Route path="dashboard" element={<Dashboard />}>
              
              <Route path="account-details" element={<AccountDetails />} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path="edit-product/:productID" element={<EditProduct />} />
              <Route path="featured-products" element={<FeaturedProducts />} />
              <Route path="address" element={<Address />} />
              <Route path="category-list" element={<CategoryList />} />
              <Route path="add-category" element={<AddCategroy />} />
              <Route path="order" element={<Order />} />
              <Route path="makeAdmin" element={<MakeAdmin />} />
              <Route path="product-approval" element={<ProductApproval />} />
              <Route path="product-list" element={<ProductList />} />
              <Route path="track-order" element={<TrackOrder />} />
              <Route path="seller-list" element={<SellerList />} />
              <Route index element={<Welcome />} />

            </Route>

          </Route>


          <Route path="shop" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
          <Route path="cart" element={<ViewCart />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
        <Messenger />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
