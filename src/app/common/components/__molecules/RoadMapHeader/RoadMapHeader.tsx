import LeftArrow from "@/app/common/icons/LeftArrow";
import AddFeedBackBtn from "../../__atoms/addFeedBackBtn/AddFeedBackBtn";

export default function RoadMapHeader() {
    return <>
        <div className="w-full flex px-8 py-[27px] bg-indigoink rounded-[10px] items-center justify-between ">
            <div className="">
                <div className="flex gap-3 items-center "><LeftArrow /><h2 className="text-white font-bold text-[14px]">Go Back</h2></div>
                <h1 className="text-white font-bold text-[24px]">Roadmap</h1>
            </div>
            <AddFeedBackBtn />
        </div>
        
    </>
}