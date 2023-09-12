import React from "react";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red ml-3">Super Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          fugiat nulla corrupt Lorem ipsum dolor sit amet. Lorem, ipsum.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensure your satissfaction
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoes8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
