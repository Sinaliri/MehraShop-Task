import Card from "./Card/Card";
//img
import fast from "../../assets/icons/fast.svg";
import returning from "../../assets/icons/returning.svg";
import certificate from "../../assets/icons/certificate.svg";
import buy from "../../assets/icons/buy.svg";
import ad from "../../assets/icons/ad.svg";
import Ad from "../Ad/Ad";
const Left = () => {
  const CardDetail = [
    {
      text: "ارسال سریع",
      subtext: "ارسال با پست ویژه (3 روزه)",
      img: fast,
    },
    {
      text: "مرجوعی تا 7 روز",
      subtext: "درصورت وجود مشکل در کالا",
      img: returning,
    },
    {
      text: "ضمانت 6 ماهه",
      subtext: "درصورت وجود مشکل در کالا",
      img: certificate,
    },
    {
      text: "امکان خرید حضوری",
      subtext: "پروفایل فروشگاه",
      img: buy,
    },
  ];
  return (
    <div className={` w-full md:w-4/12 xl:w-2/12`}>
      {CardDetail.map((item, index) => {
        return (
          <Card
            key={index}
            text={item.text}
            subtext={item.subtext}
            img={item.img}
          />
        );
      })}
      <Ad />
    </div>
  );
};

export default Left;
