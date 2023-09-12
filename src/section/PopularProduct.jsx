import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProduct = () => {
  return (
    <section className="max-container max-sm:mmt-12" id="product">
      <div className="justify-start flex flex-col gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Product
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-grays">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
          architecto alias soluta sequi velit commodi!
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
