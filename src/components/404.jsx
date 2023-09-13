import React from "react";

const NotFound = () => {
  return (
    <div className="w-full flex flex-col gap-10 justify-center items-center h-[500px] mt-10">
      <h1 className="font-bold font-palanquin text-coral-red text-8xl">
        404 Page
      </h1>
      <a href="/" className="text-xl underline font-montserrat">
        Go Back
      </a>
    </div>
  );
};

export default NotFound;
