import AnalogSpeed from "./AnalogSpeed";
import CarMode from "./CarMode";
import DigitalSpeed from "./DigitalSpeed";
import Revolutions from "./Revolutions";

interface props {
  mode: "P" | "R" | "D" | "N";
  speed: number;
}

const CarBoard = ({ mode, speed }: props) => {
  return (
    <div className="w-full p-4 h-full flex flex-col justify-center items-center">
      <div className="w-full p-4 h-full flex justify-between items-center">
        <Revolutions speed={speed} />
        <DigitalSpeed speed={speed} />
        <AnalogSpeed speed={speed} />
      </div>

      <CarMode mode={mode} />
    </div>
  );
};

export default CarBoard;
