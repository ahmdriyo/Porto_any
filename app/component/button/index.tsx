"use client";

import { link } from "fs";

const Button = () => {
  return (
    <div className="flex justify-center items-center pb-6 bg-[#c6f7ba]">
      <a href="/portofolio">
      <button
        className="w-32 h-10 bg-[#6affad] font-sans font-bold"
        style={{ borderRadius: 15, borderWidth: 2, borderColor: "black" }}
        >
        Show All
      </button>
        </a>
    </div>
  );
};

export default Button;
