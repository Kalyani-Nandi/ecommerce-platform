import React, { useEffect, useState } from "react";
import style from "./Product.module.css";
import useFetchProperties from "../hooks/useFetchProperties";
import ProductCard from "./ProductCard";


const ProductCardList = () => {
    const [visibleCount, setVisibleCount] = useState(8);
    let lastLoggedPoint = 0;

    const handelInfiniteScroll = async () => {
        try {
            const currentScroll = document.documentElement.scrollTop;

            if (currentScroll - lastLoggedPoint >= 500) {
                lastLoggedPoint += 500;
                setVisibleCount((prevCount) => prevCount + 4);
                console.log("touched ground");
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handelInfiniteScroll);

        // Cleanup to avoid memory leaks
        return () => {
            window.removeEventListener("scroll", handelInfiniteScroll);
        };
    }, []);
    const { properties, loading, error } = useFetchProperties();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    const visibleProperties = properties.slice(0, visibleCount);


    return (
        <div className={style.cardList}>
            {visibleProperties?.map((property, index) => (
                <ProductCard key={index} property={property} />
            ))}
        </div>
    );
};

export default ProductCardList;
