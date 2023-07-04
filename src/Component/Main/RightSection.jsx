import heart from "../../assets/icons/heart.svg";
import share from "../../assets/icons/share.svg";
const RightSection = ({ feather }) => {
  return (
    <div className="w-2/12 flex md:w-14 justify-between items-start overflow-hidden flex-col h-4/5 self-start mt-2">
      <div className="w-full">
        {feather.map((item) => {
          return (
            <div className="w-full h-8 sm:h-14  flex justify-center items-center bg-[#ACC294] rounded-lg mb-2 p-1">
              <img
                className=" rounded flex flex-col"
                src={item.imageurl}
                alt={item.iamgeId}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center flex-col w-full mb-8">
        <img className="mb-5" src={heart} alt="heart" />
        <img className="mb-3" src={share} alt="share" />
      </div>
    </div>
  );
};

export default RightSection;
