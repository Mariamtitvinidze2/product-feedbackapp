"use client";

import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { feedbackSchema, FeedbackFormData } from "../validations/feedback";
import Link from "next/link";
import Image from "next/image";
import arrow from "../../Image/arrow.png";

export default function AddFeedback() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackFormData>({
    resolver: yupResolver(feedbackSchema),
    defaultValues: {
      title: "",
      category: "Feature",
      details: "",
      status: "Suggestion",
    },
  });

  const onSubmit = (data: FeedbackFormData) => {
    const newFeedback = {
      id: uuidv4(),
      ...data,
    };

    const existing = JSON.parse(localStorage.getItem("feedbacks") || "[]");
    const updated = [...existing, newFeedback];
    localStorage.setItem("feedbacks", JSON.stringify(updated));

    router.push("/inside");
  };

  return (
    <div className="min-h-screen bg-[#F7F8FD] flex flex-col items-center justify-center px-4 py-10">
      <div className="flex items-center gap-3 mb-6 ml-[-470px]">
        <Link href="/inside">
          <Image src={arrow} width={7} height={3} alt="Back Arrow" />
        </Link>
        <Link href="/inside">
          <h2 className="text-[#647196] text-sm font-medium">Go Back</h2>
        </Link>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl w-full bg-white rounded-2xl flex flex-col gap-[30px] shadow-lg p-8 relative"
      >
        <h2 className="text-2xl font-bold text-[#3A4374] mb-4">Add Feedback</h2>

        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-[6px]">
            <h2 className="text-[#3A4374] font-jost text-[14px] font-bold leading-none tracking-[-0.194px]">
              Feedback Title
            </h2>
            <p className="text-[#647196] font-jost text-[14px] font-normal leading-normal">
              Add a short, descriptive headline
            </p>
          </div>
          <input
            type="text"
            placeholder="Title"
            {...register("title")}
            className="border rounded p-2 w-full mb-1"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mb-2">{errors.title.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-[6px]">
            <h2 className="text-[#3A4374] font-jost text-[14px] font-bold leading-none tracking-[-0.194px]">
              Category
            </h2>
            <p className="text-[#647196] font-jost text-[14px] font-normal leading-normal">
              Choose a category for your feedback
            </p>
          </div>
          <select
            {...register("category")}
            className="border rounded p-2 w-full mb-1"
          >
            <option value="Feature">Feature</option>
            <option value="UI">UI</option>
            <option value="UX">UX</option>
            <option value="Enhancement">Enhancement</option>
            <option value="Bug">Bug</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm mb-2">
              {errors.category.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-[6px]">
            <h2 className="text-[#3A4374] font-jost text-[14px] font-bold leading-none tracking-[-0.194px]">
              Feedback Detail
            </h2>

            <p className="text-[#647196] font-jost text-[14px] font-normal leading-normal">
              Include any specific comments on what should be improved, added,
              etc.
            </p>
          </div>

          <textarea
            placeholder="Details"
            {...register("details")}
            className="border rounded p-2 w-full mb-1"
          />
          {errors.details && (
            <p className="text-red-500 text-sm mb-4">
              {errors.details.message}
            </p>
          )}
        </div>

        <div className="flex gap-7 ml-[250px]">
          <Link href="/inside">
            <button className="w-[93px] h-[44px] shrink-0 rounded-[10px] bg-[#3A4374] text-[#F2F4FE] font-jost text-[14px] font-bold leading-normal">
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            className="w-[144px] h-[44px] shrink-0 rounded-[10px] bg-[#AD1FEA] text-[#F2F4FE] font-jost text-[14px] font-bold leading-normal"
          >
            Add Feedback
          </button>
        </div>
      </form>
    </div>
  );
}
