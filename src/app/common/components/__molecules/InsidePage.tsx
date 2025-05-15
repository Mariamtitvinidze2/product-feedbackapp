"use client";
import React from "react";
import Image from "next/image";
import Oval from "../../Image/Oval.png";
import Bulb from "../../Image/bulb.svg";
import NotFound from "../../Image/insidePageNotFound.png";

export default function InsidePage() {
  return (
    <div className="flex flex-col md:flex-row md:justify-center md:items-center bg-[#F7F8FD] w-screen  md:h-screen h-[150%] justify-center items-center">
      <div className="flex flex-row md:flex-col justify-between md:max-w-[255px] max-w-[689px] md:h-[529px] h-[178px] md:justify-between items-center md:mb-[0px] mb-[40px] md:mt-[0px] md:pl-[18px] mt-[120px]">
        <div className="">
          <div
            className="md:w-[255px] md:h-[137px] w-[223px] h-[178px] rounded-lg overflow-hidden text-white flex flex-col justify-end p-4 mr-[10px]"
            style={{
              backgroundImage: `url(${Oval.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p className="text-lg font-medium">Frontend Mentor</p>
            <p className="text-sml font-semibold">Feedback Board</p>
          </div>
        </div>
        <div className="md:w-[255px] md:h-[166px] w-[223px] h-[178px] bg-white flex flex-col items-center justify-center rounded-[20px] mr-[10px]">
          <div>
            <button className="bg-[#F2F4FF] rounded-xl w-[48px] h-[30px] text-[#4661E6] font-semibold mr-[7px]">
              All
            </button>
            <button className="bg-[#F2F4FF] rounded-xl w-[48px] h-[30px] text-[#4661E6] font-semibold mr-[7px]">
              UI
            </button>
            <button className="bg-[#F2F4FF] rounded-xl w-[48px] h-[30px] text-[#4661E6] font-semibold">
              UX
            </button>
          </div>
          <div className="w-[180px] flex justify-around mt-[14px]">
            <button className="bg-[#F2F4FF] rounded-xl w-[108px] h-[30px] text-[#4661E6] font-semibold">
              Enhancement
            </button>
            <button className="bg-[#F2F4FF] rounded-xl w-[58px] h-[30px] text-[#4661E6] font-semibold">
              Bug
            </button>
          </div>
          <div className="w-[180px] mt-[14px]">
            <button className="bg-[#F2F4FF] rounded-xl w-[77px] h-[30px] text-[#4661E6] font-semibold">
              Feature
            </button>
          </div>
        </div>

        <div className="md:w-[255px] md:h-[178px] w-[223px] h-[178px] bg-white flex flex-col justify-center items-center rounded-[20px]">
          <div className="w-[207px] flex flex-row justify-between mt-[19px]">
            <p className="text-[#3A4374] font-semibold text-[18px]">Roadmap</p>
            <a
              href=""
              className="text-[#D0D7F8] text-[13px] font-semibold hover:text-[#4661E6] underline "
            >
              View
            </a>
          </div>
          <div className="flex flex-row w-[207px] h-[23px] mt-[24px] justify-between ">
            <div className="flex flex-row items-center">
              <div className="w-[8px] h-[8px] bg-[#F49F85] rounded-[50%]" />
              <p className="ml-[16px] text-[#647196] font-semibold">Planned</p>
            </div>
            <p className="text-[#647196] font-semibold text-[16px]">0</p>
          </div>
          <div className="flex flex-row w-[207px] h-[23px] mt-[8px] justify-between ">
            <div className="flex flex-row items-center">
              <div className="w-[8px] h-[8px] bg-[#AD1FEA] rounded-[50%]" />
              <p className="ml-[16px] text-[#647196] font-semibold">
                In-Progress
              </p>
            </div>
            <p className="text-[#647196] font-semibold text-[16px]">0</p>
          </div>
          <div className="flex flex-row w-[207px] h-[23px] mt-[8px] justify-between ">
            <div className="flex flex-row items-center">
              <div className="w-[8px] h-[8px] bg-[#62BCFA] rounded-[50%]" />
              <p className="ml-[16px] text-[#647196] font-semibold">Live</p>
            </div>
            <p className="text-[#647196] font-semibold text-[16px]">0</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[825px] min-w-[465px] h-[529px] ml-[30px] md:pr-[20px] ">
        <div className=" flex flex-row w-full md:max-w-[825px] max-w-[670px] bg-[#373F68] h-[92px] items-center justify-between rounded-[15px] m-auto">
          <div className="flex flex-row items-center">
            <Image
              src={Bulb.src}
              alt="Description of image"
              width={23}
              height={24}
              className="rounded-lg shadow-lg ml-[24px] mr-[6px]"
            />
            <p className="text-white text-[18px] font-semibold">
              0 Suggestions
            </p>
          </div>
          <button className="min-w-[150px] h-[44px] bg-[#AD1FEA] mr-[16px] text-[#F2F4FE] font-bold rounded-[10px]">
            + Add Feedback
          </button>
        </div>
        <div className="w-full md:max-w-[825px] max-w-[680px] min-w-[200px] h-[600px] mt-[24px] flex justify-center items-center flex-col bg-white m-auto">
          <Image
            src={NotFound.src}
            alt="Description of image"
            width={130}
            height={137}
            className="rounded-lg  ml-[24px] mr-[6px]"
          />
          <h3 className="max-w-[276px] h-[35px] mt-[53px] mb-[16px] text-[#3A4374] text-[22px] font-bold">
            There is no feedback yet.
          </h3>
          <p className="max-w-[410px] text-[#647196] text-center font-semibold text-[14px]">
            Got a suggestion? Found a bug that needs to be squashed?
          </p>
          <p className="max-w-[410px] text-[#647196] text-center font-semibold text-[14px]">
            We love hearing about new ideas to improve our app.
          </p>
          <button className="min-w-[150px] h-[44px] bg-[#AD1FEA] mt-[48px] text-[#F2F4FE] font-bold rounded-[10px]">
            + Add FeedBack
          </button>
        </div>
      </div>
    </div>
  );
}
