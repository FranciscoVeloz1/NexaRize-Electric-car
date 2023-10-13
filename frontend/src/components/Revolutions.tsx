interface props {
  speed: number;
}

const Revolutions = ({ speed }: props) => {
  const circleSize = 384; //384px = 24rem
  const borderSize = 2 + 2; //2px * 2px

  const getExactCenter = (pointWidth: number) => {
    const remainingWidth = circleSize - borderSize;
    const totalWidth = remainingWidth - pointWidth;
    const excatCenter = totalWidth / 2;
    return excatCenter;
  };

  const getExactCenterStick = (stickW: number) => {
    const lostWidth = borderSize + stickW;
    const remainingWidth = circleSize - lostWidth;
    const excatCenter = remainingWidth / 2;
    return excatCenter;
  };

  const scales = [];

  for (let degree = -90; degree <= 90; degree += 10) {
    scales.push(
      <div
        key={degree}
        className={`w-2 h-80 bg-white absolute transform`}
        style={{
          top: getExactCenterStick(320),
          left: getExactCenterStick(8),
          rotate: `${degree}deg`,
        }}
      ></div>
    );
  }

  return (
    <div className="w-96 h-96 border-2 border-white rounded-full relative text-center font-bold text-white">
      {/* Revolutions */}
      <div
        className="w-48 absolute z-20"
        style={{
          top: 82,
          left: 94,
        }}
      >
        <div className="text-xs">RPM</div>

        <div className="mt-3">
          <span className="text-3xl">{(speed * 100) / 1000}</span>
          <span className="text-sm ml-1">RPMx1000</span>
        </div>
      </div>

      {/* Red point */}
      <div
        className="w-5 h-5 bg-red-600 border rounded-full absolute z-20"
        style={{
          top: getExactCenter(20),
          left: getExactCenter(20),
        }}
      ></div>

      {/* Hide center */}
      <div
        className="w-72 h-72 bg-gray-900 rounded-full absolute z-10"
        style={{
          top: getExactCenter(288),
          left: getExactCenter(288),
        }}
      ></div>

      {/* Hide middle - considering remove it */}
      {/* <div
        className="w-96 h-64 bg-gray-900 absolute z-30 border-t-2 border-white"
        style={{
          top: 200,
          left: -2,
        }}
      ></div> */}

      {/* Arrow */}
      <div
        className="w-48 h-48 bg-transparent absolute z-40"
        style={{
          top: getExactCenter(192),
          left: getExactCenter(192),
        }}
      >
        <div
          className="w-48 h-48 bg-transparent relative transform"
          style={{
            rotate: `${speed}deg`,
            transition: "all 0.4s",
          }}
        >
          <div
            className="w-32 h-1 bg-red-600 absolute"
            style={{
              top: 94,
              left: -32,
            }}
          ></div>
        </div>
      </div>

      {scales}
    </div>
  );
};

export default Revolutions;
