'use client'
import { useRouter } from "next/navigation";
import PlusSvg from "@/app/common/icons/PlusSvg";

export default function AddFeedBackBtn() {
    const router = useRouter()
    const addFeedbackRouter = () => {
        router.push('/feedback')
    }
    return <>
        <div className="">
            <button onClick={addFeedbackRouter} className="px-6 py-3 h-11 bg-vibrantpurple hover:bg-[#C75AF6] active:px-5 active:py-2.5 transition-all duration-200 rounded-[10px] text-[14px] font-bold text-white max-[713px]:px-4 max-[713px]:py-2.5 ]"> <PlusSvg /></button>
        </div>
    </>
}