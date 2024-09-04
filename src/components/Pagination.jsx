import React from "react";

function Pagination({ handlePrev, handleNext, pageNo }) {
  return (
    <div className="bg-gray-400 p-4 mt-8 flex justify-center">
      <div className="px-8 hover:cursor-pointer">
        <i onClick={handlePrev} class="fa-solid fa-arrow-left"></i>
      </div>
      <div className="font-bold">{pageNo}</div>
      <div className="px-8 hover:cursor-pointer">
        <i onClick={handleNext} class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
