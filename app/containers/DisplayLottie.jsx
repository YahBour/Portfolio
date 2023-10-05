"use client";
import { Player } from "@lottiefiles/react-lottie-player";

const DisplayLottie = () => {
  return (
    <div className="relative flex justify-center items-center  -z-10">
      <Player
        autoplay
        loop
        src="https://lottie.host/7e730bee-6408-45db-a255-fbd3f6c99995/L7IaHAGEBt.json"
        style={{ height: "500px", width: "500px" }}></Player>
    </div>
  );
};

export default DisplayLottie;
