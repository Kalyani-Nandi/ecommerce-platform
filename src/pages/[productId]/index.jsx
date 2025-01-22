import { useRouter } from "next/router";
import ProductSlider from "../components/propertyCard/ProductSlider";
import style from "../components/propertyCard/Product.module.css";
import useFetchProperties from "../components/hooks/useFetchProperties";
import SeoData from "../components/shared/SeoData";
import SkeletonLoader from "../components/loader/Skeleton";

function ProductPage() {
  const router = useRouter();
  const { productId } = router.query;
  const [properties, property, loading, error] = useFetchProperties(
    productId
  );

  const data = { properties, property, loading, error };
  if (loading) {
    return (
      <div>
        <SeoData
          title={"Product Details Page"}
          description={"Product details"}
        />
        <SkeletonLoader />
        <SkeletonLoader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error || "something went wrong"}</div>;
  }

  return (
    <div>
      <SeoData title={"Product Details Page"} description={"Product details"} />
      <ProductSlider images={property?.propertyImage} address={property?.address} />
      <div>
        <h2 className={style.address}>{property?.address}</h2>
        <p className={style.availability}>Available: {property?.availability}</p>
      </div>
      <iframe
        className={style.map}
        src={property?.embedIframeSrc}
        width="100%"
        height="300"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default ProductPage;
