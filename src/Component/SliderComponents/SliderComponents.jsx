import React from "react";

const SliderComponents = ({ image, handler, selectedID }) => {
  console.log(selectedID);
  const imageChanged = (event) => {
    // console.log(event.target.id);
    console.log(image);
    handler(image);
  };
  return (
    <div
      id={image.imageid}
      val
      className="border p-2.5 cursor-pointer rounded"
      style={
        selectedID === image.imageid
          ? {
              maxWidth: "100px",
              maxHeight: "100px",
              minWidth: "60px",
              minHeight: "60px",
              border: "1px solid #86BC42",
              opacity: "1",
            }
          : {
              maxWidth: "100px",
              maxHeight: "100px",
              minWidth: "60px",
              minHeight: "60px",
              opacity: "0.4",
            }
      }
    >
      <img
        className="w-full"
        id={image.imageid}
        src={image.imageurl}
        alt={image.imageid}
        onClick={imageChanged}
      />
    </div>
  );
};

export default SliderComponents;
