"use client";
import React from "react";
import arrow from "../../Image/arrow.png";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { feedbackSchema, FeedbackFormData } from "../validations/feedback";

const AddFeedback = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackFormData>({
    resolver: yupResolver(feedbackSchema),
  });

  const onSubmit = (data: FeedbackFormData) => {
    console.log("Form submitted:", data);
  };
  return (
    <div className="min-h-screen bg-[#F7F8FD] flex items-center justify-center px-4 py-10">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8 relative">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/inside">
            <button>
              <Image src={arrow} width={7} height={3} alt="Back Arrow" />
            </button>
          </Link>
          <Link href="/inside">
            <h2 className="text-[#647196] text-sm font-medium">Go Back</h2>
          </Link>
        </div>

        <h2 className="text-[#3A4374] text-2xl font-bold mb-6 mt-4">
          Create New Feedback
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1">
            <label className="text-[#3A4374] text-sm font-semibold">
              Feedback Title
            </label>
            <p className="text-[#647196] text-sm">
              Add a short, descriptive headline
            </p>
            <input
              {...register("title")}
              placeholder="Feedback title..."
              className="w-full bg-[#F7F8FD] p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#AD1FEA]"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>
          <div className="space-y-1">
            <label className="text-[#3A4374] text-sm font-semibold">
              Category
            </label>
            <p className="text-[#647196] text-sm">
              Choose a category for your feedback
            </p>
            <select
              {...register("category")}
              className="w-full bg-[#F7F8FD] p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#AD1FEA]"
            >
              <option value="Feature">Feature</option>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="Enhancement">Enhancement</option>
              <option value="Bug">Bug</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>
          <div className="space-y-1">
            <label className="text-[#3A4374] text-sm font-semibold">
              Feedback Detail
            </label>
            <p className="text-[#647196] text-sm">
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea
              {...register("details")}
              placeholder="Feedback details..."
              className="w-full bg-[#F7F8FD] p-3 rounded-md resize-none h-28 border border-transparent focus:outline-none focus:ring-2 focus:ring-[#AD1FEA]"
            />
            {errors.details && (
              <p className="text-red-500 text-sm">{errors.details.message}</p>
            )}
          </div>
          <div className="flex justify-end gap-4 pt-2">
            <Link href="/inside">
              <button
                type="button"
                className="bg-[#3A4374] text-white px-5 py-2 rounded-lg text-sm font-bold hover:opacity-90"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="bg-[#AD1FEA] text-white px-6 py-2 rounded-lg text-sm font-bold hover:opacity-90"
            >
              Add Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFeedback;
