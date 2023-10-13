import CarBoard from "@components/CarBoard";
import { ChangeEvent, useState } from "react";

const App = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [mode, setMode] = useState<"P" | "R" | "D" | "N">("P");

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };

  const handleMode = () => {
    const modes = ["P", "N", "D", "R"];
    const currentIndex = modes.indexOf(mode);

    if (currentIndex !== -1 && currentIndex < modes.length - 1) {
      setMode(modes[currentIndex + 1] as "P" | "R" | "D" | "N");
    } else {
      setMode("P");
    }
  };
  return (
    <div className="w-full h-screen bg-gray-900 p-4">
      <CarBoard mode={mode} speed={sliderValue} />

      {/* Simulation of the controls */}
      <div className="flex">
        <button onClick={handleMode}>Change mode</button>

        <input
          type="range"
          min="0"
          max="180"
          step="1"
          value={sliderValue}
          onChange={handleSliderChange}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default App;
