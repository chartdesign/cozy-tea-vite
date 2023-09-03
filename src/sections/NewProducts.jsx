import React from "react";
import ProductCard from "../components/ProductCard";
import { cozyTea_01, cozyTea_02, cozyTea_03, cozyTea_09, cozyTea_10, cozyTea_11 } from "../assets/images";

const NewProducts = () => {
  return (
    <section className="bg-[#9cd3db] bg-justIn bg-cover bg-center py-10 border-b border-light-green ">
        <h1 className="text-4xl text-center text-dark-green">Just Arrived</h1>
        <p className="text-center text-dark-green">Browse our newest products</p>
      <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard
          imageSrc={cozyTea_09}
          altText="Image 1"
          description={
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          }
          teaName="Nigrosian"
        />
        <ProductCard
          imageSrc={cozyTea_10}
          altText="Image 1"
          description={
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              minus quo labore.
            </p>
          }
          teaName="Ginger Tea"
        />
        <ProductCard
          imageSrc={cozyTea_11}
          altText="Image 1"
          description="Description for Image 1"
          teaName="Rooibios"
        />
        <ProductCard
          imageSrc={cozyTea_09}
          altText="Image 1"
          description={
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              quam.
            </p>
          }
          teaName="Peppermint Tea"
        />
      </div>
    </section>
  );
};

export default NewProducts;
