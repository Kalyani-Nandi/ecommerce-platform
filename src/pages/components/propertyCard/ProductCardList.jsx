import React, { useEffect, useState } from "react";
import style from "./Product.module.css";
import useFetchProperties from "../hooks/useFetchProperties";
import ProductCard from "./ProductCard";
import SkeletonLoader from "../loader/Skeleton";


const ProductCardList = () => {
    const { properties, loading, error } = useFetchProperties();
    const [visibleCount, setVisibleCount] = useState(8);
    const [loadingMore, setLoadingMore] = useState(false);
    let lastLoggedPoint = 0;

    const handelInfiniteScroll = async () => {
        try {
            const currentScroll = document.documentElement.scrollTop;

            if (currentScroll - lastLoggedPoint >= 500) {
                setLoadingMore(true);
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
    useEffect(() => {
        if (visibleCount >= properties.length) {
            setLoadingMore(false);
        }
    }, [properties, visibleCount]);

    if (loading) {
        return (
            <div className={style.cardList}>
                {/* Show Skeleton Loaders when loading */}
                {[...Array(visibleCount)].map((_, index) => (
                    <SkeletonLoader key={index} />
                ))}
            </div>
        );
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

            {loadingMore && <div className={style.loadingText}>Loading more...</div>}

        </div>
    );
};

export default ProductCardList;
