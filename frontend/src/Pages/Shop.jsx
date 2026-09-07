import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollection from "../Components/NewCollections/NewCollection";
import NewsLatter from "../Components/NewsLatter/NewsLetter";

const Shop = () => {
  return (
    <div className="shop">
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLatter />
    </div>
  );
};

export default Shop;
