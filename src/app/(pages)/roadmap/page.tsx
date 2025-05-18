
import RoadMapFeedBacks from "@/app/common/components/__molecules/RoadMapFeedBacks/RoadMapFeedBacks";
import RoadMapHeader from "@/app/common/components/__molecules/RoadMapHeader/RoadMapHeader";

export default function RoadMap() {
    return <>

        <div className="w-full bg-[#F7F8FD] px-5 py-[78px] max-[900px]:px-3 max-[713px]:p-0 ">
            <div className="w-full max-w-[1110px] mx-auto flex flex-col gap-12 max-[713px]:gap-0">
                <RoadMapHeader />
                <RoadMapFeedBacks />
            </div>
        </div>

    </>
}