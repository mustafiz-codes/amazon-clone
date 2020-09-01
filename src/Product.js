import React from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, key, title, price, rating, image }) {
  const [{}, dispatch] = useStateValue();

  //   console.log(props);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        key: key,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>

        <p className="product_price">
          <small> $ </small>
          <strong> {price} </strong>
        </p>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>★</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
