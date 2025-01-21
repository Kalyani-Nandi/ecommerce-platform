import React, { useEffect, useState } from 'react';
import style from './Product.module.css';
import propertiesData from '../../../../public/locale/property_data.json'
const ProductCard = ({ property }) => {

    return (
        <div className={style.card}>
            <img src={property.propertyImage} alt={property.address} className={style.image} />
            <div className={style.info}>
                <h2 className={style.address}>{property.address}</h2>
                <p className={style.rating}>Rating: {property.rating}⭐</p>
                <p className={style.views}>Views: {property.views}</p>
                <p className={style.availability}>Available: {property.availability}</p>
                <iframe
                    className={style.map}
                    src={property.embedIframeSrc}
                    width="100%"
                    height="200"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

const ProductCardList = () => {

        const [properties, setProperties] = useState([]);
    
        useEffect(() => {
          // Simulate fetching data (in case of API call or other logic)
          setProperties(propertiesData);
        }, []);
    
    return (
        <div className={style.cardList}>
            {properties?.map((property, index) => (
                <ProductCard key={index} property={property} />
            ))}
        </div>
    );
};

export default ProductCardList;
