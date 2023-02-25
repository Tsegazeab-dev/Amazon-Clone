import React from 'react'
import "./Product.css"
import StarIcon from '@mui/icons-material/Star';
import { UseStateValue } from '../../StateProvider';
function Product({id, title, price, rating, image}) {
    const[{basket}, dispatch] = UseStateValue();
   const addToBasket = ()=>{
     dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
        },
     });
   }
   console.log(basket);
  return (
    <div className='product'>
        <div className='product__info'>
            
            <p className='product__title'>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating)
                .fill()
                .map(()=>(
                    <StarIcon className='star' />
                   
                ))}
            </div>
        </div>
        <img 
        src={image} 
        alt="" />
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product;