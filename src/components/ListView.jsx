import ShopItem from "./ShopItem";
import React from 'react';


const ListView = (productsArr) => {
    console.log(productsArr)
    return (
        <div className="listView">
          {productsArr.productsArr.map((product, index) => (
            <ShopItem key={index} obj={product} />
          ))}
        </div>
      );}
   

export default ListView;

