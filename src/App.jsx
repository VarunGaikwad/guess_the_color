import { useState } from "react";
import { generateOption } from "./lib/common";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [score, setScore] = useState(0),
    [colors, setColors] = useState(generateOption()),
    [correctIndex, setCorrectIndex] = useState(
      Math.floor(Math.random() * colors.length)
    ),
    onButtonClick = (selectedIndex) => {
      const flag = selectedIndex === correctIndex;
      toast(flag ? "Correct!" : "Wrong!", {
        className: "bg-black bg-opacity-30 text-white",
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
      });

      if (flag) {
        setColors(generateOption());
        setCorrectIndex(Math.floor(Math.random() * colors.length));
        setScore(score + 1);
      }
    };

  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center bg-black bg-opacity-30 text-center font-semibold text-white">
      <ToastContainer />
      <span className="text-4xl m-2">Score ({score})</span>
      <div
        className="size-60"
        style={{
          backgroundColor: colors[correctIndex],
        }}
      ></div>
      <p className="m-2 tracking-wider">Guess The Color?</p>
      <div>
        {colors.map((color, idx) => (
          <button
            className="bg-black bg-opacity-30 p-2 m-2 rounded-lg hover:scale-110 transition-all duration-300 tracking-widest"
            onClick={() => onButtonClick(idx)}
            key={idx}
          >
            {color}
          </button>
        ))}
      </div>
    </main>
  );
}
