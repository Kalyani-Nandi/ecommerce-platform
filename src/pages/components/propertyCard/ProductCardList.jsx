import React, { useCallback, useEffect, useRef, useState } from "react";
import style from "./Product.module.css";
import useFetchProperties from "../hooks/useFetchProperties";
import ProductCard from "./ProductCard";

const ProductCardList = () => {
  const { properties, loading, error } = useFetchProperties();

  const [propertyData, setPropertyData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const propertiesPerPage = 5;
  const observer = useRef();

  const loadProperties = useCallback(() => {
    if (!properties || properties.length === 0) return;

    const startIndex = (page - 1) * propertiesPerPage;
    const endIndex = page * propertiesPerPage;

    const newProperties = properties.slice(startIndex, endIndex);

    if (newProperties.length === 0) {
      setHasMore(false);
    } else {
      setPropertyData((prev) => [...prev, ...newProperties]);
    }
  }, [page, properties]);

  const lastCardRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  useEffect(() => {
    loadProperties();
  }, [loadProperties]);

  if (loading && propertyData.length === 0) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={style.cardList}>
      {propertyData?.map((property, index) => {
        if (index === propertyData.length - 1) {
          return (
            <div ref={lastCardRef} key={property.id}>
              <ProductCard property={property} />
            </div>
          );
        }
        return <ProductCard key={property.id} property={property} />;
      })}
      {!hasMore && <div>No more properties to load</div>}
    </div>
  );
};

export default ProductCardList;
