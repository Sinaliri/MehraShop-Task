import info from "../../assets/icons/info.svg";
import FilledIcon from "../../assets/icons/fillstar.svg";
import EmptyIcon from "../../assets/icons/emptystar.svg";

const ProductInfo = ({ rating, text }) => {
  const icons = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      icons.push(<img key={i} src={FilledIcon} alt="filled" />);
    } else {
      icons.push(<img key={i} src={EmptyIcon} alt="empty" />);
    }
  }
  return (
    <>
      {/* this part is about voting, Description, and info */}
      <div className={` flex justify-between items-center mt-2`}>
        <div
          className={`mt-2 text-sm font-normal flex flex-nowrap w-3/12`}
          style={{ color: "#dd794f" }}
        >
          <span className="mr-1">کالای غیراصل</span>
          <img src={info} alt="info" />
        </div>
        <div className="flex flex-row-reverse">{icons}</div>
      </div>
      <p className={` text-sm font-normal mt-5`} style={{ color: "#6b6b6b" }}>
        {text}
      </p>
    </>
  );
};

export default ProductInfo;
