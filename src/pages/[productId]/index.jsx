import { useRouter } from "next/router";
import ProductSlider from "../components/propertyCard/ProductSlider";
import { useEffect, useState } from "react";
import style from "../components/propertyCard/Product.module.css";
import useFetchProperties from "../components/hooks/useFetchProperties";

function ProductPage() {
  const router = useRouter();
  const { productId } = router.query;
  const { property, properties, loading, error } = useFetchProperties(productId);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {productId}</p>
      <ProductSlider
        images={property.propertyImage}
        address={property.address}
      />
      <div>
        <h2 className={style.address}>{property.address}</h2>
        <p className={style.availability}>Available: {property.availability}</p>
      </div>
      <iframe
        className={style.map}
        src={property?.embedIframeSrc}
        width="100%"
        height="200"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default ProductPage;
