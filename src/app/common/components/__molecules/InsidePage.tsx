"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function InsidePage() {
  return (
    <div className="flex justify-center items-center bg-[#F7F8FD] w-screen h-screen">
      <div className="flex flex-col justify-between max-w-[255px] h-[529px]">
        <div>
          <div
            className="w-[255px] h-[137px] rounded-lg overflow-hidden text-white flex flex-col justify-end p-4"
            style={{
              backgroundImage: "../../Image/Oval.png",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p className="text-lg font-medium">Frontend Mentor</p>
            <p className="text-sml font-semibold">Feedback Board</p>
          </div>
        </div>
        <div className="w-[255px] h-[166px] bg-white flex flex-col items-center justify-center rounded-[20px]">
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
        <div className="w-[255px] h-[178px] bg-white flex flex-col justify-center items-center rounded-[20px]">
          <div className="w-[207px] flex flex-row justify-between mt-[19px]">
            <p className="text-[#3A4374] font-semibold text-[18px]">Roadmap</p>
            <a
              href="#"
              className="text-[#D0D7F8] text-[13px] font-semibold hover:text-[#4661E6] underline"
            >
              View
            </a>
          </div>
          <div className="flex flex-row w-[207px] h-[23px] mt-[24px] justify-between">
            <div className="flex flex-row items-center">
              <div className="w-[8px] h-[8px] bg-[#F49F85] rounded-full" />
              <p className="ml-[16px] text-[#647196] font-semibold">Planned</p>
            </div>
            <p className="text-[#647196] font-semibold text-[16px]">0</p>
          </div>

          <div className="flex flex-row w-[207px] h-[23px] mt-[8px] justify-between">
            <div className="flex flex-row items-center">
              <div className="w-[8px] h-[8px] bg-[#AD1FEA] rounded-full" />
              <p className="ml-[16px] text-[#647196] font-semibold">
                In-Progress
              </p>
            </div>
            <p className="text-[#647196] font-semibold text-[16px]">0</p>
          </div>

          <div className="flex flex-row w-[207px] h-[23px] mt-[8px] justify-between">
            <div className="flex flex-row items-center">
              <div className="w-[8px] h-[8px] bg-[#62BCFA] rounded-full" />
              <p className="ml-[16px] text-[#647196] font-semibold">Live</p>
            </div>
            <p className="text-[#647196] font-semibold text-[16px]">0</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-[825px] min-w-[600px] h-[529px] ml-[30px]">
        <div className="flex flex-row max-w-[825px] bg-[#373F68] h-[92px] items-center justify-between rounded-[15px]">
          <div className="flex flex-row items-center">
            <Image
              src={"../../Image/nulb.svg"}
              alt="Bulb"
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
        <div className="max-w-[825px] h-[600px] mt-[24px] flex justify-center items-center flex-col bg-white">
          {/* <Image
            src={"../../Image/insidePageNotFound.png"}
            alt="No feedback illustration"
            width={130}
            height={137}
            className="rounded-lg"
          /> */}
          <h3 className="max-w-[276px] h-[35px] mt-[53px] mb-[16px] text-[#3A4374] text-[22px] font-bold">
            There is no feedback yet.
          </h3>
          <p className="max-w-[410px] text-[#647196] text-center font-semibold text-[14px]">
            Got a suggestion? Found a bug that needs to be squashed?
          </p>
          <p className="max-w-[410px] text-[#647196] text-center font-semibold text-[14px]">
            We love hearing about new ideas to improve our app.
          </p>
          <Link href="feedback">
            <button className="min-w-[150px] h-[44px] bg-[#AD1FEA] mt-[48px] text-[#F2F4FE] font-bold rounded-[10px]">
              + Add Feedback
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
