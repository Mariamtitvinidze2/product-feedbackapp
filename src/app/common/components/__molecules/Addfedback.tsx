"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { feedbackSchema, FeedbackFormData } from "../validations/feedback";
import { useRouter } from "next/navigation";
import arrow from "../../Image/arrow.png";

interface AddFeedbackProps {
  initialData?: FeedbackFormData & { id: string };
}

const AddFeedback: React.FC<AddFeedbackProps> = ({ initialData }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FeedbackFormData>({
    resolver: yupResolver(feedbackSchema),
  });

  useEffect(() => {
    if (initialData) {
      setValue("title", initialData.title);
      setValue("category", initialData.category);
      setValue("details", initialData.details);
    }
  }, [initialData, setValue]);

  const onSubmit = (data: FeedbackFormData) => {
    let existingFeedbacks = [];

    try {
      const stored = localStorage.getItem("feedbacks");
      existingFeedbacks = stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("Parsing error:", err);
    }

    if (initialData) {
      const updatedFeedbacks = existingFeedbacks.map((fb: any) =>
        fb.id === initialData.id ? { ...fb, ...data } : fb
      );
      localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks));
    } else {
      const newFeedback = {
        id: Date.now().toString(),
        ...data,
        upvotes: 0,
        comments: 0,
        status: "suggestion",
      };
      const updated = [...existingFeedbacks, newFeedback];
      localStorage.setItem("feedbacks", JSON.stringify(updated));
    }

    router.push("/inside");
  };

  return (
    <div className="min-h-screen bg-[#F7F8FD] flex items-center justify-center px-4 py-10">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8 relative">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/inside">
            <Image src={arrow} width={7} height={3} alt="Back Arrow" />
          </Link>
          <Link href="/inside">
            <h2 className="text-[#647196] text-sm font-medium">Go Back</h2>
          </Link>
        </div>

        <h2 className="text-[#3A4374] text-2xl font-bold mb-6 mt-4">
          {initialData ? "Edit Feedback" : "Create New Feedback"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="text-[#3A4374] text-sm font-semibold">
              Feedback Title
            </label>
            <p className="text-[#647196] text-sm">
              Add a short, descriptive headline
            </p>
            <input
              {...register("title")}
              placeholder="Feedback title..."
              className="w-full bg-[#F7F8FD] p-3 rounded-md border focus:ring-2 focus:ring-[#AD1FEA]"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>
          <div>
            <label className="text-[#3A4374] text-sm font-semibold">
              Category
            </label>
            <p className="text-[#647196] text-sm">Choose a category</p>
            <select
              {...register("category")}
              className="w-full bg-[#F7F8FD] p-3 rounded-md border focus:ring-2 focus:ring-[#AD1FEA]"
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
          <div>
            <label className="text-[#3A4374] text-sm font-semibold">
              Feedback Detail
            </label>
            <p className="text-[#647196] text-sm">
              Include any specific comments on what should be improved.
            </p>
            <textarea
              {...register("details")}
              placeholder="Feedback details..."
              className="w-full bg-[#F7F8FD] p-3 rounded-md h-28 resize-none border focus:ring-2 focus:ring-[#AD1FEA]"
            />
            {errors.details && (
              <p className="text-red-500 text-sm">{errors.details.message}</p>
            )}
          </div>
          <div className="flex justify-end gap-4">
            <Link href="/inside">
              <button
                type="button"
                className="bg-[#3A4374] text-white px-5 py-2 rounded-lg font-bold"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="bg-[#AD1FEA] text-white px-6 py-2 rounded-lg font-bold"
            >
              {initialData ? "Save Changes" : "Add Feedback"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFeedback;
