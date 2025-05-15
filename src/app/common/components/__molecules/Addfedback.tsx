import React from "react";
import arrow from "../../Image/arrow.png";
import Image from "next/image";

const Addfedback = () => {
  return (
    <div className="bg-[#F7F8FD] w-screen h-screen flex items-center justify-center">
      <div className="flex gap-4">
        <button>
          <Image src={arrow} width={8} height={2} alt="" />
        </button>
        <h2>Go Back</h2>
      </div>
      <div className="w-[500px] h-[600px] rounded-[18px]"></div>
    </div>
  );
};

export default Addfedback;
