import React, { useEffect, useState } from 'react'
import propertyData from "../../../../public/locale/property_data.json"
import Image from 'next/image';
const PropertyCard = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
      // Simulate fetching data (in case of API call or other logic)
      setProperties(propertyData);
    }, []);

    console.log("propertyData", propertyData);
    
  return (
    <>
    {
        (properties || []).map((data, index)=>{
            return (
                <>
                <Image height={100} width={100} src={data.propertyImage} alt="property_img" />
                <p>{data.address}</p>
                </>
            )
        })
    }
    </>
  )
}

export default PropertyCard