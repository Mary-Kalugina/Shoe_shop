import React from 'react';

const ShopItem = (obj) => {
    return (
    <div className="shopItem">
        <img src={obj.obj.img} alt={obj.obj.name}></img>
        <span className="nameItem">{obj.obj.name}</span>
        <span className="colorItem">{obj.obj.color}</span>
        <span className="priceItem">{obj.obj.price}$</span>
        <button>Add to cart</button> 
    </div>
)}

export default ShopItem;