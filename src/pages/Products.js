import React from "react";
import "../components/products/Products.css";
import Footer from "../components/footer/Footer";
import PriceIntro from "../components/products/PriceIntro";
import Pricing from "../components/home/Pricing";
import Training from "../components/products/Training";
import Certification from "../components/products/Certification";
import Comprehensive from "../components/products/Comprehensive";

const Products = () => {
  return (
    <div className="products-container">
      <PriceIntro />
      <Pricing />
      <Training />
      <Certification />
      <Comprehensive />
      <Footer />
    </div>
  );
};

export default Products;
