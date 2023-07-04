import angle from "../../assets/icons/angle.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import telegram from "../../assets/icons/telegram.svg";
import twitter from "../../assets/icons/twitter.svg";
import shared from "../../assets/icons/shared.svg";
import instagram from "../../assets/icons/instagram.svg";

const ProductTags = ({ ID1, storeName, tags }) => {
  const socialMedia = [
    { image: shared },
    { image: whatsapp },
    { image: instagram },
    { image: twitter },
    { image: telegram },
  ];
  return (
    // product tags and Social medias
    <div className={`text-base w-full mt-5 mb-2`}>
      <div>
        <span style={{ color: "#878787" }}> {ID1}</span>
        <span style={{ color: "#383838", fontSize: "14px", fontWeight: 500 }}>
          : کد کالا
        </span>
      </div>
      <div className={`flex text-right flex-row-reverse flex-nowrap mb-2`}>
        <span style={{ color: "#383838", fontSize: "14px", fontWeight: 500 }}>
          : نام فروشگاه
        </span>
        <div
          className={` text-base flex border border-dotted font-normal`}
          style={{ color: "#86bc42", borderColor: "#86bc42" }}
        >
          <a href="#"> </a>
          <img src={angle} alt="angle" /> {storeName}
        </div>
      </div>
      <div className="mb-2">
        <span style={{ color: "#383838", fontSize: "14px", fontWeight: 500 }}>
          تگ ها:
        </span>
        {tags.map((item, index) => {
          return (
            <span
              key={index}
              style={{
                color: "#878787",
                borderBottom: "1px dotted #878787 ",
                margin: "0 5px",
              }}
            >
              {`${item} `}
            </span>
          );
        })}
      </div>
      <div className="flex justify-end items-center w-full text-right mb-2">
        <div className="flex w-37 justify-start">
          {socialMedia.map((item, index) => {
            return (
              <img
                className="w-4 h-4 mr-3"
                key={index}
                src={item.image}
                alt={`${index}`}
              />
            );
          })}
        </div>
        <span style={{ color: "#383838", fontSize: "14px", fontWeight: 500 }}>
          : اشتراک گذاری
        </span>
      </div>
    </div>
  );
};

export default ProductTags;
