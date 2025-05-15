'use client'
import LeftArrow from "@/app/common/icons/LeftArrow";
import AddFeedBackBtn from "../../__atoms/addFeedBackBtn/AddFeedBackBtn";
import { useRouter } from "next/navigation";
export default function RoadMapHeader() {
    const router = useRouter()
    const GoBack = () => {
        router.push('inside')
    }
    return <>
        <div className="w-full flex px-8 py-[27px] bg-indigoink rounded-[10px] items-center justify-between ">
            <div className="">
                <button onClick={GoBack} className="flex gap-3 items-center "><LeftArrow /><h2 className="text-white font-bold hover:underline  text-[14px]">Go Back</h2></button>
                <h1 className="text-white font-bold text-[24px]">Roadmap</h1>
            </div>
            <AddFeedBackBtn />
        </div>

    </>
}