
import { Geist, Geist_Mono } from "next/font/google";
import SeoData from "./components/shared/SeoData";
import ProductCardList from "./components/propertyCard/ProductCardList";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"], 
});

export default function Home() {
  return (
    <>
      <SeoData
        title={"Product List Page"}
        description={'Our all product'}
      />
      <ProductCardList/>
    </>
  );
}
