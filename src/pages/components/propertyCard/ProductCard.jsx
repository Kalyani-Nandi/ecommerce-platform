import React, { useState } from "react";
import style from "./Product.module.css";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import ProductSlider from "./ProductSlider";
import { IoHeartSharp } from "react-icons/io5";

const getStarColor = (rating) => {
  if (rating < 4 && rating <= 2) {
    return "red";
  } else if (rating >= 4) {
    return "green";
  } else {
    return "orange";
  }
};

const ProductCard = ({ property }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const starColor = getStarColor(property?.rating);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Link href={`/${property?.id}`} className={style.card}>
      <ProductSlider
        images={property?.propertyImage}
        address={property?.address}
      />
      <div className={style.info}>
        <div className={style.ratingCtn}>
          <p className={style.views}>
            <MdOutlineRemoveRedEye />
            {property?.views}
          </p>
          <p className={style.rating} style={{ color: starColor }}>
            <FaStar style={{ color: starColor }} />
            {property?.rating || "No Rating"}
          </p>
        </div>
        <h2 className={style.address}>{property?.address}</h2>
        <p className={style.availability}>Available: {property?.availability}</p>

        <span
          className={style.wishlistButton}
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist();
          }}
        >
          <IoHeartSharp
            style={{
              color: isWishlisted ? "red" : "#e2e8f0",
              fontSize: "30px",
            }}
          />
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
