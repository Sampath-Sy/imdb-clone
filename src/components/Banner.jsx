import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)`,
      }}
      className="h-[20vh] md:h-[80vh] bg-cover bg-center flex items-end mt-12"
    >
      <div className="text-white text-xl text-center w-full bg-gray-900/60 p-4">
        Avengers Endgame
      </div>
    </div>
  );
};

export default Banner;
