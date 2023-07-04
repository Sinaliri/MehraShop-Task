// import styles from "./Card.module.scss";
import angle from "../../../assets/icons/angle.svg";

const Card = ({ text, subtext, img }) => {
  return (
    <div
      className={`flex py-4 items-center w-full border border-solid rounded my-5`}
      style={{ borderColor: "#E7EBE3", height: "100px" }}
    >
      <div className={`w-8/12 flex flex-col justify-start items-end`}>
        <h5 className="text-base">{text}</h5>
        {text === "امکان خرید حضوری" ? (
          <a
            href="#"
            className="flex items-center flex-nowrap text-sm text-end border-b border-dotted "
            style={{ color: "#849D6A", borderColor: "#849D6A" }}
          >
            <img src={angle} alt="angle" />
            {subtext}
          </a>
        ) : (
          <span
            className="flex flex-nowrap text-sm text-end"
            style={{ color: "#6B6B6B" }}
          >
            {subtext}
          </span>
        )}
      </div>
      <div className={`w-4/12 flex justify-center items-center`}>
        <img src={img} alt="fast" />
      </div>
    </div>
  );
};

export default Card;
