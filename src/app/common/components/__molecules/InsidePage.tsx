"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Oval from "../../Image/Oval.png";
import Bulb from "../../Image/bulb.svg";
import Notfound from "../../Image/insidePageNotFound.png";
import CommentIcon from "../../Image/comment.png";
interface Feedback {
  id: string;
  title: string;
  category: string;
  details: string;
  status?: string;
}

export default function InsidePage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    loadFeedbacks();
  }, []);

  const loadFeedbacks = () => {
    const stored = localStorage.getItem("feedbacks");
    if (stored) {
      setFeedbacks(JSON.parse(stored));
    }
  };

  const filteredFeedbacks =
    filter === "All"
      ? feedbacks
      : feedbacks.filter((fb) => fb.category === filter);

  const statusCounts = {
    Planned: feedbacks.filter((fb) => fb.status === "Planned").length,
    "In-Progress": feedbacks.filter((fb) => fb.status === "In-Progress").length,
    Live: feedbacks.filter((fb) => fb.status === "Live").length,
  };

  return (
    <div className="flex min-h-screen justify-center items-start bg-[#F7F8FD]  p-4 py-10">
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

        <div className="w-[255px] h-auto bg-white p-4 rounded-[20px]">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter("All")}
              className={`bg-[#F2F4FF] text-[#4661E6] rounded-xl px-4 h-[30px] font-semibold ${
                filter === "All" ? "!bg-[#4661E6] !text-white" : ""
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("UI")}
              className={`bg-[#F2F4FF] text-[#4661E6] rounded-xl px-4 h-[30px] font-semibold ${
                filter === "UI" ? "!bg-[#4661E6] !text-white" : ""
              }`}
            >
              UI
            </button>
            <button
              onClick={() => setFilter("UX")}
              className={`bg-[#F2F4FF] text-[#4661E6] rounded-xl px-4 h-[30px] font-semibold ${
                filter === "UX" ? "!bg-[#4661E6] !text-white" : ""
              }`}
            >
              UX
            </button>
            <button
              onClick={() => setFilter("Enhancement")}
              className={`bg-[#F2F4FF] text-[#4661E6] rounded-xl px-4 h-[30px] font-semibold ${
                filter === "Enhancement" ? "!bg-[#4661E6] !text-white" : ""
              }`}
            >
              Enhancement
            </button>
            <button
              onClick={() => setFilter("Bug")}
              className={`bg-[#F2F4FF] text-[#4661E6] rounded-xl px-4 h-[30px] font-semibold ${
                filter === "Bug" ? "!bg-[#4661E6] !text-white" : ""
              }`}
            >
              Bug
            </button>
            <button
              onClick={() => setFilter("Feature")}
              className={`bg-[#F2F4FF] text-[#4661E6] rounded-xl px-4 h-[30px] font-semibold ${
                filter === "Feature" ? "!bg-[#4661E6] !text-white" : ""
              }`}
            >
              Feature
            </button>
          </div>
        </div>

        <div className="w-[255px] h-[178px] bg-white flex flex-col justify-center items-center rounded-[20px]">
          <div className="w-[207px] flex flex-row justify-between mt-[19px]">
            <p className="text-[#3A4374] font-semibold text-[18px]">Roadmap</p>
            <Link href="/roadmap">
              <button className="text-[#D0D7F8] text-[13px] font-semibold hover:text-[#4661E6] underline">
                View
              </button>
            </Link>
          </div>
          <div className="flex flex-row w-[207px] h-[23px] mt-[24px] justify-between">
            <div className="flex flex-row items-center">
              <div className="w-[8px] h-[8px] bg-[#F49F85] rounded-full" />
              <p className="ml-[16px] text-[#647196] font-semibold">Planned</p>
            </div>
            <p className="text-[#647196] font-semibold text-[16px]">
              {statusCounts.Planned}
            </p>
          </div>

          <div className="flex flex-row w-[207px] h-[23px] mt-[8px] justify-between">
            <div className="flex flex-row items-center">
              <div className="w-[8px] h-[8px] bg-[#AD1FEA] rounded-full" />
              <p className="ml-[16px] text-[#647196] font-semibold">
                In-Progress
              </p>
            </div>
            <p className="text-[#647196] font-semibold text-[16px]">
              {statusCounts["In-Progress"]}
            </p>
          </div>

          <div className="flex flex-row w-[207px] h-[23px] mt-[8px] justify-between">
            <div className="flex flex-row items-center">
              <div className="w-[8px] h-[8px] bg-[#62BCFA] rounded-full" />
              <p className="ml-[16px] text-[#647196] font-semibold">Live</p>
            </div>
            <p className="text-[#647196] font-semibold text-[16px]">
              {statusCounts.Live}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-[825px] min-w-[600px] ml-[30px]">
        <div className="flex flex-row max-w-[825px] bg-[#373F68] h-[92px] items-center justify-between rounded-[15px] p-6">
          <div className="flex flex-row items-center">
            <Image
              src={Bulb}
              alt="Bulb"
              width={23}
              height={24}
              className="rounded-lg shadow-lg mr-[6px]"
            />
            <p className="text-white text-[18px] font-semibold">
              {filteredFeedbacks.length} Suggestions
            </p>
          </div>
          <Link href="/feedback">
            <button className="min-w-[150px] h-[44px] bg-[#AD1FEA] hover:bg-[#C75AF6] text-[#F2F4FE] font-bold rounded-[10px] transition-colors">
              + Add Feedback
            </button>
          </Link>
        </div>
        {filteredFeedbacks.length === 0 ? (
          <div className="max-w-[825px] h-[600px] mt-[24px] flex justify-center items-center flex-col bg-white rounded-[10px]">
            <Image src={Notfound} alt="notfound" width={120} height={130} />
            <h3 className="max-w-[276px] h-[35px] mt-[53px] mb-[16px] text-[#3A4374] text-[24px] font-bold text-center">
              There is no feedback yet
            </h3>
            <p className="text-[#647196] text-[16px] text-center max-w-[410px] mb-[40px]">
              Got a suggestion? Found a bug that needs to be squashed?
              <br />
              We love hearing about new ideas to improve our app.
            </p>
            <Link href="/feedback">
              <button className="min-w-[150px] h-[44px] bg-[#AD1FEA] hover:bg-[#C75AF6] text-[#F2F4FE] font-bold rounded-[10px] transition-colors">
                + Add Feedback
              </button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4 mt-[24px]">
            {filteredFeedbacks.map((fb) => (
              <div
                key={fb.id}
                className="p-6 border rounded-lg shadow bg-white"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#F2F4FE] rounded-lg p-2 min-w-[40px] text-center">
                    <span className="text-[#3A4374] font-bold">0</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-bold text-lg text-[#3A4374]">
                      {fb.title}
                    </h2>
                    <p className="text-[#647196] text-sm mb-2">{fb.details}</p>
                    <span className="inline-block bg-[#F2F4FF] text-[#4661E6] rounded-lg px-4 py-1 text-sm font-semibold">
                      {fb.category}
                    </span>
                  </div>
                  <button className="flex items-center gap-1 bg-transparent border-none cursor-pointer">
                    <Image
                      src={CommentIcon}
                      alt="Comments"
                      width={18}
                      height={16}
                    />
                    <span className="text-[#3A4374] font-bold">0</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
