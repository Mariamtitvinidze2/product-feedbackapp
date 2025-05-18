'use client'
import GoBackBtn from "@/app/common/components/__atoms/goBackBtn/goBackBtn";
import EditFeedback from "@/app/common/components/__molecules/feedbackEdit/EditFeedback";

export default function FeedbackEditPage() {
    return <>
        <div className="w-full bg-[#F7F8FD] pb-[129px] px-6  max-[800px]:pt-[52px] pt-[92px]  max-[550px]:pt-[34px] max-[500px]:pb-[77px]">
            <div className="w-full max-w-[540px] mx-auto flex flex-col gap-[68px] max-[550px]:max-w-[327px] transition-all duration-300 ">
                <GoBackBtn className="#647196" />
                <EditFeedback />
            </div>
        </div>
    </>
}