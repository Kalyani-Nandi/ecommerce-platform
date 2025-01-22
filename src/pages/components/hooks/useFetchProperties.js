import { useState, useEffect } from "react";

const useFetchProperties = (productId = null) => {
  const [properties, setProperties] = useState([]);
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPropertiesData = async () => {
      try {
        const response = await fetch(
          "https://api.jsonbin.io/v3/b/679059e3acd3cb34a8d0d982",
          {
            headers: {
              "X-Master-Key":
                "$2a$10$myIgGw7sD9EupFO4zpY8rea7HaBpbAK.2Smj/GvK.QVF8qaIsSSsi",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (productId) {
          const selectedProperty = data.record.find(
            (item) => item.id == productId
          );
          setProperty(selectedProperty);
        } else {
          setProperties(data.record);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPropertiesData();
  }, [productId]);

  return [properties, property, loading, error];
};

export default useFetchProperties;
