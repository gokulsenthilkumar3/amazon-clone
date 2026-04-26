import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import "../App.css";
import { itemsAdded } from "../reducers/cartSlice";
import { toast } from "react-toastify";

const PLACEHOLDER_IMAGE = "https://via.placeholder.com/200x200?text=No+Image";

const ProductCard = React.memo(({ product }) => {
  const { title, description, price, image, id } = product || {};
  const dispatch = useDispatch();

  const addItems = () => {
    dispatch(itemsAdded(product));
    toast.success(`${title} was added to cart successfully`);
  };

  const handleBuy = () => {
    dispatch(itemsAdded(product));
    toast.info(`Proceeding to checkout for: ${title}`);
  };

  return (
    <div className="product-card">
      <img
        src={image}
        alt={title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = PLACEHOLDER_IMAGE;
        }}
      />
      <div className="product-info">
        <div className="title">{title}</div>
        <div className="description">
          <strong>Description:</strong>
          <br />
          {description}
        </div>
        <div className="price">
          <strong>Price: $</strong>
          {price}
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleBuy}>Buy</button>
        <button onClick={addItems}>Add to cart</button>
      </div>
    </div>
  );
});

ProductCard.displayName = "ProductCard";

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
