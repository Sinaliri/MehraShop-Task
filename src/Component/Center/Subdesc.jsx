const Subdesc = ({ subdescInfo }) => {
  return (
    <div className={`my-6`} style={{ color: "#6b6b6b" }}>
      {subdescInfo.map((item) => {
        return (
          <h4
            className="text-sm font-normal flex justify-start flex-row-reverse"
            style={{ color: "#383838" }}
          >
            <div>: {item.key}</div>
            <span className="mr-1" style={{ color: "#6b6b6b" }}>
              {item.value}
            </span>
          </h4>
        );
      })}
    </div>
  );
};

export default Subdesc;
