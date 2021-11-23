import React from "react";
import Card from "./Card";

export default function Products({ list }) {
  const products = list.map((item) => <Card key={item.sku} item={item} />);
    return <div className="products">{ products}</div>;
}
