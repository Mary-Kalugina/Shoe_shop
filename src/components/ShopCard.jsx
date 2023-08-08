import React from 'react';


const ShopCard = (obj) => {
    return (
    <div className="shopCard">
        <div className='header'>
<span className="name">{obj.obj.name}</span>
        <span className="color">{obj.obj.color}</span>
        </div>
        <img src={obj.obj.img} alt={obj.obj.name}></img>
        <div className='footer'>
           <span className="price">{obj.obj.price}$</span>
        <button>Add to cart</button> 
        </div>
        
    </div>
)}
   
export default ShopCard;