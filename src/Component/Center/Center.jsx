//img
import basket from "../../assets/icons/basket.svg";
import { useState } from "react";
import ProductTags from "../ProductTags/ProductTags";
import ProductInfo from "./ProductInfo";
import Subdesc from "./Subdesc";
const Center = ({ item }) => {
  const [number, setNumber] = useState(1);
  const [activeButton, setActiveButton] = useState("button1");
  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  const increase = () => {
    setNumber((prev) => prev + 1);
  };
  const decrease = () => {
    if (number > 1) {
      setNumber((prev) => prev - 1);
    }
  };
  return (
    // this component is about counter button , group button , add to cart button
    <div className={` w-full md:w-8/12 xl:w-6/12 text-right p-6`}>
      <h3 className={`text-2xl font-bold`} style={{ color: "#383838" }}>
        {item.title}
      </h3>
      <ProductInfo rating={item.rating} text={item.desc} />
      <Subdesc subdescInfo={item.subdesc} />
      <div
        className={` flex flex-wrap md:flex-nowrap justify-between w-full flex-row-reverse mt-12 `}
      >
        <div className={` flex flex-col justify-between w-full md:w-64 `}>
          <div
            className={` w-full gap-1 mb-2 flex justify-between items-center flex-row-reverse`}
          >
            {item.Quantities.map((item) => {
              return (
                <button
                  id={item.id}
                  className=" bg-white border rounded h-8 "
                  style={
                    activeButton === item.id
                      ? {
                          backgroundColor: "#849D6A",
                          color: "#fff",
                          width: "72px",
                          border: "1px solid #c4c6c2",
                          direction: "rtl",
                        }
                      : {
                          width: "72px",
                          border: "1px solid #c4c6c2",
                          color: "#c4c6c2",
                          direction: "rtl",
                        }
                  }
                  onClick={() => handleClick(item.id)}
                >
                  {item.value}
                </button>
              );
            })}
          </div>
          <div
            className={` flex w-full justify-between items-center h-14 px-4 py-2.5 border rounded `}
            style={{ borderColor: "#c4c6c2" }}
          >
            <div
              className={`flex justify-center items-center text-white w-6 h-6 rounded cursor-pointer`}
              style={
                number > 1
                  ? { backgroundColor: "#6B6B6B" }
                  : { backgroundColor: "#C4C6C2" }
              }
              onClick={decrease}
            >
              -
            </div>
            <div
              className={` text-base font-normal`}
              style={{ color: "#878787" }}
            >
              {number}
            </div>
            <div
              className={`flex justify-center items-center text-white w-6 h-6 rounded cursor-pointer bg-[#6B6B6B]`}
              onClick={increase}
            >
              +
            </div>
          </div>
        </div>
        <div
          className={`w-full md:w-3-12 justify-center items-center mt-5 md:mt-0`}
        >
          <div className="flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start">
            <div className={`flex flex-row`}>
              <span className="bg-[#ACC294] text-white text-sm font-normal mr-2 rounded py-1.5 px-2">
                {item.discount}%
              </span>
              <s className="font-normal text-xl" style={{ color: "#C4C6C2" }}>
                {item.originalprice}
              </s>
            </div>
            <div
              className={`flex justify-center items-center text-right mb-5 mt-1`}
            >
              <div className="text-sm font-normal" style={{ color: "#878787" }}>
                تومان
              </div>
              <div
                className="text-2xl font-medium"
                style={{ color: "#86BC42" }}
              >
                {item.currentPrice * number}
              </div>
            </div>
          </div>
          <button
            className={`flex w-full md:w-8/12 lg:w-6/12 justify-center items-center rounded bg-[#86bc42] text-white h-14 px-3`}
          >
            <span className="mr-1 text-base  font-bold">
              افزودن به سبد خرید
            </span>
            <img src={basket} alt="basket" />
          </button>
        </div>
      </div>
      <ProductTags
        ID1={item.ProductCode}
        storeName={item.availableStore}
        tags={item.tags}
      />
    </div>
  );
};

export default Center;
