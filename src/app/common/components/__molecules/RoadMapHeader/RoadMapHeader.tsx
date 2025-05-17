'use client'
import AddFeedBackBtn from "../../__atoms/addFeedBackBtn/AddFeedBackBtn";
import GoBackBtn from "../../__atoms/goBackBtn/goBackBtn";

export default function RoadMapHeader() {

    return <>
        <div className="w-full flex px-8 py-[27px] bg-indigoink rounded-[10px] items-center justify-between ">
            <div className="">
                <GoBackBtn className='#ffffff'/>
                <h1 className="text-[#ffffff] font-bold text-[24px]">Roadmap</h1>
            </div>
            <AddFeedBackBtn />
        </div>

    </>
}