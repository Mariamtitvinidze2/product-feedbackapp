"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { EditFeedbackSchema, EditFeedBackData } from "../../validations/feedback";
import { useEffect, useState } from "react";
import EditFeedBackBtn from "../../__atoms/editFeedBackBtn/EditFeedBackBtn";
export default function EditFeedBackForm() {
    const [title, setTitle] = useState('ravi feedback ra')
    const { register, handleSubmit, formState: { errors }
    } = useForm<EditFeedBackData>({
        resolver: yupResolver(EditFeedbackSchema),
        mode: "onChange",
    });

    useEffect(() => {
    }, [])
    const editFeedback = (data: EditFeedBackData) => {
        console.log('data', data)
    }
    return (
        <>
            <form onSubmit={handleSubmit(editFeedback)} className="w-full flex flex-col gap-[75px] ">
                <h1 className="text-[#3A4374] text-[24px] font-bold max-[550px]:text-[18px]">
                    {`Editing '${title}'`}
                </h1>

                <div className="flex flex-col gap-6">
                    <div className="w-full">
                        <h1 className="text-[14px] font-bold text-[#3A4374] max-[550px]:text-[13px]">
                            Feedback Title
                        </h1>
                        <h2 className="text-[14px] mt-0.5  text-[#647196] max-[550px]:text-[13px]">
                            Add a short, descriptive headline
                        </h2>
                        <input
                            {...register('feedTitle')}
                            type="text"
                            className={`w-full px-6 py-[13px] outline-none mt-4 bg-[#F7F8FD] text-[15px] text-[#3A4374] rounded-[5px] ${errors.feedTitle ? 'focus:border-red-500 focus:border-[1px]' : 'focus:border-[#4661E6] focus:border-[1px]'}  `}
                            maxLength={40}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        {errors.feedTitle && (
                            <p className="text-red-500 text-sm">{errors.feedTitle.message}</p>
                        )}
                    </div>
                    <div className="">
                        <h1 className="text-[14px] font-bold text-[#3A4374] max-[550px]:text-[13px]">
                            Category
                        </h1>
                        <h2 className="text-[14px] mt-0.5  text-[#647196] max-[550px]:text-[13px]">
                            Choose a category for your feedback
                        </h2>
                        <select {...register('editCategory')} name="editCategory" className={`w-full px-6 py-[13px] outline-none mt-4 bg-[#F7F8FD] text-[15px] text-[#3A4374] rounded-[5px] ${errors.editCategory ? 'focus:border-red-500 focus:border-[1px]' : 'focus:border-[#4661E6] focus:border-[1px]'}  `}
                        >
                            <option value="">Select Category</option>
                            <option value="Suggestion">Suggestion</option>
                            <option value="Suggestion">Planned</option>
                            <option value="In-Progress">In-Progress</option>
                            <option value="Live">Live</option>

                        </select>
                        {errors.editCategory && (
                            <p className="text-red-500 text-sm">{errors.editCategory.message}</p>
                        )}
                    </div>
                    <div className="">
                        <h1 className="text-[14px] font-bold text-[#3A4374] max-[550px]:text-[13px]">
                            Update Status
                        </h1>
                        <h2 className="text-[14px] mt-0.5  text-[#647196] max-[550px]:text-[13px]">
                            Change feature state
                        </h2>
                        <select {...register('editStatus')} name="editStatus" className={`w-full px-6 py-[13px] outline-none mt-4 bg-[#F7F8FD] text-[15px] text-[#3A4374] rounded-[5px] ${errors.editCategory ? 'focus:border-red-500 focus:border-[1px]' : 'focus:border-[#4661E6] focus:border-[1px]'}  `}
                        >
                            <option value="">Select Option</option>
                            <option value="UI">UI</option>
                            <option value="UX">UX</option>
                            <option value="Enhancement">Enhancement</option>
                            <option value="Bug">Bug</option>
                            <option value="Feature">Feature</option>

                        </select>
                        {errors.editStatus && (
                            <p className="text-red-500 text-sm">{errors.editStatus.message}</p>
                        )}
                    </div>
                    <div className="">
                        <h1 className="text-[14px] font-bold text-[#3A4374] max-[550px]:text-[13px]">
                            Feedback Detail
                        </h1>
                        <h2 className="text-[14px] mt-0.5  text-[#647196] max-[550px]:text-[13px]">
                            Include any specific comments on what should be improved, added, etc.
                        </h2>
                        <textarea {...register('feedDetail')} name="feedDetail" className={`w-full resize-none px-6 py-[13px] outline-none mt-4 bg-[#F7F8FD] text-[15px] text-[#3A4374] rounded-[5px] ${errors.feedDetail ? 'focus:border-red-500 focus:border-[1px]' : 'focus:border-[#4661E6] focus:border-[1px]'}  `}
                        ></textarea>
                        {errors.feedDetail && (
                            <p className="text-red-500 text-sm">{errors.feedDetail.message}</p>
                        )}
                    </div>
                    <div className="flex justify-between">
                        <EditFeedBackBtn color="#D73737" text="Delete" />
                        <div className="flex gap-4">a
                            <EditFeedBackBtn color="#3A4374" text="Cancel" />
                            <EditFeedBackBtn color="#AD1FEA" text="Add Feedback" />

                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}