import React from "react";
import ad from "../../assets/icons/ad.svg";

const Ad = () => {
  return (
    <div className="relative w-full h-32 mb-5 bg-[#E7E7E7]">
      <img
        className="absolute z-0 h-full"
        src={ad}
        alt="ad1"
        style={{ top: "0", right: "0", left: "0" }}
      />
      <div className="flex flex-col z-10 relative pt-8 pl-5 pr-1 rounded">
        <span className="text-xs font-bold">TASTY HEALTHY</span>
        <span className="text-xl font-sans font-semibold mb-2">FRESH</span>
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">VEGETABLES</span>
          <span
            className="text-sm border-l font-bold pl-1"
            style={{ color: "#41544A", borderColor: "#41544A" }}
          >
            SHOPNOW
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ad;
