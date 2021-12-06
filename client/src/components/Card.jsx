import React from "react";
import { useImages } from "../states/ImagesProvider";

export default function Card({ item }) {
  const { images } = useImages();
  const { sku, name, price, color } = item;

  return (
    <div className="card">
      {images && <img src={images[sku][0]?.src} alt="" />}

      <div className="product-info">
        <h3>{name}</h3>
        <p>{price.amount}</p>
        <p>{color.id}</p>
      </div>
    </div>
  );
}
