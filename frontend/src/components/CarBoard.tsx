import car from "../img/car.png";
import battery from "../img/battery.png";

interface props {
  mode: "P" | "R" | "D" | "N";
  speed: number;
}

const CarBoard = ({ mode, speed }: props) => {
  return (
    <div className="w-full p-4 h-full flex flex-col items-center">
      <div className="w-full mb-4 flex justify-end">
        <img src={battery} alt="battery" className="filter invert w-6" />
      </div>

      {/* Car modes like parking, drive, reverse, etc... */}
      <div className="w-1/3 border-b-2 border-white mb-16">
        <div className="grid grid-cols-4 gap-4">
          <p className="text-white text-center text-3xl">
            {mode === "P" && mode}
          </p>

          <p className="text-white text-center text-3xl">
            {mode === "N" && mode}
          </p>

          <p className="text-white text-center text-3xl">
            {mode === "D" && mode}
          </p>

          <p className="text-white text-center text-3xl">
            {mode === "R" && mode}
          </p>
        </div>
      </div>

      {/* Speed, car and revolutions */}
      <div className="w-full h-full border-2 border-white rounded-full">
        <div className="w-full h-full grid grid-cols-3 gap-4 items-center justify-items-center">
          <div className="w-fit">
            <p className="text-white text-center text-8xl">{speed}</p>
            <p className="text-white text-center text-xl">km/h</p>
          </div>

          <div className="text-white text-center text-2xl">
            <img src={car} alt="car" className="filter invert" />
          </div>

          <div className="w-fit">
            <p className="text-white text-center text-8xl">{(speed * 200 * .0001).toString().slice(0, 4)}</p>
            <p className="text-white text-center text-xl">x1000 rpm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarBoard;
