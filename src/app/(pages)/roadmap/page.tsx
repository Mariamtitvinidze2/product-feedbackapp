
import RoadMapFeedBacks from "@/app/common/components/__molecules/RoadMapFeedBacks/RoadMapFeedBacks";
import RoadMapHeader from "@/app/common/components/__molecules/RoadMapHeader/RoadMapHeader";

export default function RoadMap() {
    return <>

        <div className="w-full bg-[#F7F8FD] px-5 py-[78px] ">
            <div className="w-full max-w-[1110px] mx-auto flex flex-col gap-12">
                <RoadMapHeader />
                <RoadMapFeedBacks />
            </div>
        </div>

    </>
}