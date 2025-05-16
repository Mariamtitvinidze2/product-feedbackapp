"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Oval from "../../Image/Oval.png";
import Bulb from "../../Image/bulb.svg";
import Notfound from "../../Image/insidePageNotFound.png";
import FeedBackItemsBtn from "../__atoms/feedBackItemsBtn/FeedBackItemsBtn";
import AddFeedBackBtn from "../__atoms/addFeedBackBtn/AddFeedBackBtn";

export default function InsidePage() {
  const FeedBackItemBtns = [{ text: 'All' }, { text: 'UI' }, { text: 'UX' }, { text: 'Enhancement' }, { text: 'Bug' }, { text: 'Feature' },]
  const router = useRouter()
  const RoadMapRouter = () => {
    router.push('/roadmap')
  }
  return (
    <div className="flex justify-center items-center bg-[#F7F8FD] w-screen h-screen">
      <div className="flex flex-col justify-between max-w-[255px] h-[529px]">
        <div>
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

        <div className="w-[255px] p-6 bg-white flex flex-wrap gap-3.5 items-center justify-center rounded-[20px]">

          <div className=" w-full flex gap-2 justify-start">
            {FeedBackItemBtns.splice(0, 3).map((item, index) => {
              return <FeedBackItemsBtn key={index} text={item.text} />
            })}
          </div>
          <div className=" flex flex-wrap gap-3.5">
            {FeedBackItemBtns.splice(0, 3).map((item, index) => {
              return <FeedBackItemsBtn key={index} text={item.text} />
            })}
          </div>
        </div>

        <div className="w-[255px] h-[178px] bg-white flex flex-col justify-center items-center rounded-[20px]">
          <div className="w-[207px] flex flex-row justify-between mt-[19px]">
            <p className="text-[#3A4374] font-semibold text-[18px]">Roadmap</p>
            <button onClick={RoadMapRouter}
              className="text-[#D0D7F8] text-[13px] font-semibold hover:text-[#4661E6] underline"
            >
              View
            </button>
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

      <div className="flex flex-col w-full max-w-[825px] min-w-[600px] h-[529px] ml-[30px]">
      <div className="flex flex-row w-full bg-[#373F68]  items-center pr-4 pl-6 py-3.5 justify-between rounded-[15px]">
          <div className="flex flex-row items-center">
            <Image
              src={Bulb}

              alt="Bulb"
              width={23}
              height={24}
              className="rounded-lg shadow-lg  mr-[6px]"
            />
            <p className="text-white text-[18px] font-semibold">
              0 Suggestions
            </p>
          </div>

          <div className="">
            <AddFeedBackBtn />
          </div>

        </div>

        <div className="max-w-[825px] h-[600px] mt-[24px] flex justify-center items-center flex-col bg-white">
          <Image src={Notfound} alt="notfound" width={120} height={130} />
          <h3 className="max-w-[276px] h-[35px] mt-[53px] mb-[16px] text-[#3A4374] text-[22px] font-bold">
            There is no feedback yet.
          </h3>
          <p className="max-w-[410px] text-[#647196] text-center font-semibold text-[14px]">
            Got a suggestion? Found a bug that needs to be squashed?
          </p>
          <p className="max-w-[410px] text-[#647196] text-center font-semibold text-[14px]">
            We love hearing about new ideas to improve our app.
          </p>
          <div className="mt-12">
            <AddFeedBackBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
