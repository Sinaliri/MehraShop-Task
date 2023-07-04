import Image from "next/image";
import React from "react";
import basket from "../../../assets/icons/buy.svg";
const TestCard = () => {
  return (
    <div className="w-[300px] py-4 flex items-center justify-center bg-[#c7c7c7]">
      <Image src={basket} alt="basket" />
      <div className="p-2 gap-y-2 bg-[#FFF000]">
        <h2>عنوان 1</h2>
        <p>تست تست تست تس </p>
      </div>
    </div>
  );
};

export default TestCard;
