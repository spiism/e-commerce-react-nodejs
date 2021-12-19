import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";
import { addItem } from "./cartHelpers";

const Card = ({
  product,
  showViewProductButton = true,
  showMoreDescription = false,
}) => {
  const [redirect, setRedirect] = useState(false);

  const showViewButton = (showViewProductButton) => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2">
          <button className="btn btn-outline-primary mt-2 mb-2">
            View Product
          </button>
        </Link>
      )
    );
  };

  const addToCart = () => {
    addItem(product, () => {
      setRedirect(true);
    });
  };

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCartButton = () => {
    return (
      <button onClick={addToCart} className="btn btn-outline-warning mt-2 mb-2">
        Add to card
      </button>
    );
  };

  const showStock = (quantity) => {
    return quantity > 0 ? (
      <span className="badge badge-primary badge-pill">In Stock</span>
    ) : (
      <span className="badge badge-primary badge-pill">Out of Stock</span>
    );
  };

  const showDescription = (showMoreDescription) => {
    return showMoreDescription ? (
      <p className="mt-2 d-flex flex-column text-justify">
        {product.description}
      </p>
    ) : (
      <p className="mt-2 d-flex flex-column">
        {product.description.substring(0, 100) + "..."}
      </p>
    );
  };

  return (
    <div className="col-12 mb-3">
      <div className="card">
        <div className="card-header name">{product.name}</div>
        <div className="card-body">
          {shouldRedirect(redirect)}
          <ShowImage item={product} url="product" />

          {/* <p className="mt-2 d-flex flex-column">{product.description.substring(0, 100)}...</p> */}
          {showDescription(showMoreDescription)}
          <p className="black-10">${product.price}</p>
          <p className="black-9">
            Category: {product.category && product.category.name}
          </p>

          {/* use library moment to see added date of product */}
          <p className="black-8">
            Added on {moment(product.createdAt).fromNow()}
          </p>

          {showStock(product.quantity)}
          <br />

          {showViewButton(showViewProductButton)}
          {showAddToCartButton()}
        </div>
      </div>
    </div>
  );
};

export default Card;
