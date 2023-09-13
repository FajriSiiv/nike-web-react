import React from "react";
import { useParams } from "react-router-dom";
import { star } from "../assets/icons";
import NotFound from "../components/NotFound";
import Button from "../components/Button";
import { products } from "../constants";

const DetailProduct = () => {
  const { id } = useParams();
  const detail = products.filter((product) => {
    const productName = product.name.replace(/[\s-]/g, "");

    return productName === id;
  });

  if (detail.length === 0) return <NotFound />;

  return (
    <div className="relative xl:padding-l wide:padding-r padding-b ">
      {detail &&
        detail.map((detail, index) => (
          <div
            key={index}
            className="flex flex-row gap-10 mt-10 max-md:flex-col "
          >
            <div className="w-full flex justify-center max-sm:h-auto">
              <img src={detail.imgURL} alt={detail.name} className="w-5/6" />
            </div>
            <div className="flex flex-col w-full px-3">
              <h1 className="font-bold  font-palanquin text-4xl mb-2">
                {detail.name}
              </h1>
              <div className="mb-8 flex justify-start gap-2.5">
                <img src={star} alt="rating" width={30} height={30} />
                <p className="font-montserrat text-2xl leading-normal text-slate-gray">
                  ({detail.rating})
                </p>
              </div>

              <p className="text-slate-gray info-text mb-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                quidem eos ipsum expedita dignissimos aut numquam maxime.
                Officia, cumque sequi? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Cupiditate voluptate ipsum, dicta ad dolorem
                harum vitae ducimus hic quasi doloribus quas cumque eveniet
                nihil, eius ipsa iure similique voluptates impedit.
              </p>

              <Button label={detail.price} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default DetailProduct;
