import "./App.css";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Wave from "./assets/wave.png";
import Image1 from "./assets/image1.png";
import Image2 from "./assets/image2.png";
import Image3 from "./assets/image3.png";
import Image4 from "./assets/image4.png";

function App() {
  const [opened, setOpened] = useState(false);

  const animate = () => {};

  const open = () => {
    document.getElementById("top").style.top = "-50%";
    document.getElementById("bottom").style.bottom = "-50%";
    document.getElementById("button").style.opacity = "0";

    setTimeout(() => {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";

      setOpened(true);
    }, 500);
  };

  return (
    <>
      <Helmet>
        <title>HBD</title>
      </Helmet>

      <div className="opening-container overflow-hidden w-screen h-screen relative flex justify-center items-center">
        <div
          id="top"
          className="absolute top-0 z-20 w-full h-1/2 bg-red-400 "
        ></div>
        <button id="button" onClick={open} className="z-30 md:w-40 md:h-20 ">
          <p className="text md:text-2xl">Open</p>
        </button>
        <div
          id="bottom"
          className="absolute bottom-0 z-20 w-full h-1/2 bg-red-400 "
        ></div>
      </div>

      <div
        className={`Content-container overflow-hidden w-screen h-screen transform transition-all duration-700 ease-out top-0 flex items-center justify-center ${
          opened
            ? "opacity-100 absolute translate-y-0"
            : "opacity-0 absolute pointer-events-none"
        }`}
      >
        <div className="image-wrapper w-40 h-40 absolute top-16 left-0 md:w-96 md:h-96  lg:w-56 lg:h-56">
          <img src={Image1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="image-wrapper w-40 h-40 absolute top-16 right-0 md:w-96 md:h-96 lg:w-56 lg:h-56">
          <img src={Image2} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="image-wrapper w-32 h-32 absolute bottom-16 right-8 md:w-80 md:h-80 lg:w-56 lg:h-56">
          <img src={Image3} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="image-wrapper w-32 h-32 absolute bottom-16 left-8 md:w-80 md:h-80 lg:w-56 lg:h-56">
          <img src={Image4} alt="" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text text-black text-center font-extrabold">
            Happy BIrthday Dok
          </h1>
          <h2 className="text text-black text-center text-xl">
            Wish U All The Best
          </h2>
        </div>
      </div>
    </>
  );
}

export default App;
