import { useEffect, useState } from "react";

const Tachometer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const needle = document.getElementById("needle");
    const maxRPM = 8000; // Set your maximum RPM value
    const currentValue = count * 500; // Set your current RPM value

    const angle = (currentValue / maxRPM) * 180; // Calculate the angle for the needle

    needle!.style.transform = `rotate(${angle}deg)`;
  }, [count]);

  return (
    <div className="tachometer">
      <div className="needle" id="needle"></div>
    </div>
  );
};

export default Tachometer;
