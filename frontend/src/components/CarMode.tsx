interface props {
  mode: "P" | "R" | "D" | "N";
}

const CarMode = ({ mode }: props) => {
  return (
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
  );
};

export default CarMode;
