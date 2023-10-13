interface props {
  speed: number;
}

const DigitalSpeed = ({ speed }: props) => {
  return (
    <div className="border border-white w-60 h-80 rounded-lg flex flex-col justify-center">
      <p className="text-white text-center text-8xl">{speed}</p>
      <p className="text-white text-center text-xl">km/h</p>
    </div>
  );
};

export default DigitalSpeed;
