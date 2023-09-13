import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full flex flex-col gap-10 justify-center items-center h-[500px] mt-10">
      <h1 className="font-bold font-palanquin text-coral-red text-8xl">
        404 Page
      </h1>
      <Link to="/" className="text-xl underline font-montserrat">
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
