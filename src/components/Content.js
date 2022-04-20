import React from "react";
import ImageOne from "../Images/egg.jpg";
import ImageTwo from "../Images/egg-2.jpg";
const Content = () => {
  return (
    <>
      <div className="bg-white h-screen flex flex-col justify-center items-center font-white py-40">
        <img src={ImageOne} className="h-full rounded mb-20 shadow" alt="egg" />
        <div className="flex flex-col justify-center items-center" />
        <h2 className="text-2xl mb-2">Egg Muffins</h2>
        <p className="mb-2">Crispy,delicous and nutricious</p>
        <span>$16</span>
      </div>
      <div className="bg-white h-screen flex flex-col justify-center items-center font-white py-40">
        <img src={ImageTwo} className="h-full rounded mb-20 shadow" alt="egg" />
        <div className="flex flex-col justify-center items-center" />
        <h2 className="text-2xl mb-2">Egg Salad</h2>
        <p className="mb-2">Crispy,delicous and nutricious</p>
        <span>$18</span>
      </div>
    </>
  );
};

export default Content;
