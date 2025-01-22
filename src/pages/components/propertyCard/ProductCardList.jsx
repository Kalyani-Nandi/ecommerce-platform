import React, { useEffect, useState } from "react";
import style from "./Product.module.css";
import useFetchProperties from "../hooks/useFetchProperties";
import ProductCard from "./ProductCard";


const ProductCardList = () => {
  const { properties, loading, error } = useFetchProperties();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className={style.cardList}>
      {properties?.map((property, index) => (
        <ProductCard key={index} property={property} />
      ))}
    </div>
  );
};

export default ProductCardList;
