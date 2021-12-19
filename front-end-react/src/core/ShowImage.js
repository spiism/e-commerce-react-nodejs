import React from "react";
import { API } from "../config";

const ShowImage = ({ item, url }) => (
  <div className="product-img">
    <img
      src={`${API}/${url}/photo/${item._id}`}
      alt={item.name}
      className="mb-3 mx-auto d-block" 
      style={{ maxHeight: "500px", maxWidth: "200px" } }
    />
  </div>
);

export default ShowImage;
