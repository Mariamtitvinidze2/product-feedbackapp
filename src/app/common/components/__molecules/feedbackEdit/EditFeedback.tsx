import BigPlusSvg from "@/app/common/icons/BigPlusSvg";
import EditFeedBackForm from "../../__molecules/EditFeedBackForm/EditFeedBackForm";

export default function EditFeedback() {
    return <>
        <div className="w-full px-[42px] pt-[52px] rounded-[10px] flex flex-col gap-[75px] pb-10 bg-white relative max-[550px]:gap-6 max-[550px]:p-6 max-[550px]:pt-11">
            <div className="absolute w-[56px] h-[56px] flex justify-center items-center bg-red-600 rounded-full -top-7 max-[550px]:w-10 max-[550px]:h-10 max-[550px]:-top-5 "><BigPlusSvg /></div>
            <div className="">
                <h1 className="text-[#3A4374] text-[24px] font-bold max-[550px]:text-[18px]">Editing ‘Add a dark theme option’</h1>
            </div>
            <EditFeedBackForm />
        </div>
    </>
}