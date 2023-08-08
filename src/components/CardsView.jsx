import ShopCard from "./ShopCard";
import React from 'react';


const CardsView = ({ productsArr }) => {
  return (
    <div className="shopCards">
      {productsArr.map((product, index) => (
        <ShopCard key={index} obj={product} />
      ))}
    </div>
  );
}

export default CardsView;
