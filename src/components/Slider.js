import { useState, useEffect } from "react";
import bug1 from "../assets/bug1.jpeg";
import bug4 from "../assets/bug4.jpg";
import bug5 from "../assets/bug5.jpeg";

const images = [bug1, bug4, bug5];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 sm:h-96">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Buganda Event"
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
};

export default Slider;
