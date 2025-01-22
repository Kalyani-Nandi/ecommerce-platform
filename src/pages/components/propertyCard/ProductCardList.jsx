import React, { useCallback, useEffect, useRef, useState } from "react";
import style from "./Product.module.css";
import useFetchProperties from "../hooks/useFetchProperties";
import ProductCard from "./ProductCard";

const ProductCardList = () => {
  const { properties, loading, error } = useFetchProperties();

  const [propertyData, setPropertyData] = useState([]); // Loaded properties
  const [page, setPage] = useState(1); // Current page
  const [hasMore, setHasMore] = useState(true); // Check if there's more data
  const propertiesPerPage = 4; // Number of properties to load per page
  const observer = useRef();

  // Load properties based on the current page
  const loadProperties = useCallback(() => {
    const startIndex = (page - 1) * propertiesPerPage;
    const endIndex = page * propertiesPerPage;

    const newProperties = properties.slice(startIndex, endIndex);

    if (newProperties.length === 0) {
      setHasMore(false); // No more data available
    } else {
      setPropertyData((prev) => [...prev, ...newProperties]);
    }
  }, [page]);

  // Observe the last item for infinite scroll
  const lastCardRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1); // Load the next page
        }
      });

      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  // Fetch data when the page changes
  useEffect(() => {
    loadProperties();
  }, [loadProperties]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className={style.cardList}>
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
    </div>
  );
};

export default ProductCardList;
