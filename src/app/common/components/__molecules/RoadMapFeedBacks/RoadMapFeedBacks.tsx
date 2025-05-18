import CommentSvg from "@/app/common/icons/CommentSev";
import DotSvg from "@/app/common/icons/DotSvg";
import TopArrow from "@/app/common/icons/TopArrow";
import RoadMapMobile from "../RoadMapMobile/RoadMapMobie";

export default function RoadMapFeedBacks() {
    const roadmap = [
        {
            status: "Planned",
            description: "Ideas prioritized for research",
            color: '#F49F85',
            cards: [
                {
                    title: "More comprehensive reports",
                    description: "It would be great to see a more detailed breakdown of solutions.",
                    type: "Feature",
                    upvotes: 123,
                    comments: 2,
                    color: '#F49F85'
                },
                {
                    title: "Learning paths",
                    description: "Sequenced projects for different goals to help people improve.",
                    type: "Feature",
                    upvotes: 28,
                    comments: 1,
                    color: '#F49F85'
                }
            ]
        },
        {
            status: "In-Progress",
            description: "Currently being developed",
            color: '#AD1FEA',
            cards: [
                {
                    title: "One-click portfolio generation",
                    description: "Add ability to create professional looking portfolio from profile.",
                    type: "Feature",
                    upvotes: 62,
                    comments: 1,
                    color: '#AD1FEA'
                },
                {
                    title: "Bookmark challenges",
                    description: "Be able to bookmark challenges to take later on.",
                    type: "Feature",
                    upvotes: 31,
                    comments: 1,
                    color: '#AD1FEA'
                },
                {
                    title: "Animated solution screenshots",
                    description: "Screenshots of solutions with animations don’t display correctly.",
                    type: "Bug",
                    upvotes: 9,
                    comments: 0,
                    color: '#AD1FEA'
                }
            ]
        },
        {
            status: "Live",
            description: "Released features",
            color: '#62BCFA',
            cards: [
                {
                    title: "Add micro-interactions",
                    description: "Small animations at specific points can add delight.",
                    type: "Enhancement",
                    upvotes: 71,
                    comments: 2,
                    color: '#62BCFA'
                }
            ]
        }
    ];

    return <>

        <div className="w-full flex justify-between gap-[30px] max-[900px]:gap-2.5">
            {roadmap.map((item, index) => {
                return <div className="w-full max-w-[350px] max-[900px]:max-w-[243px] max-[713px]:hidden" key={index}>
                    <div className="">
                        <h1 className="text-[18px] font-bold text-[#3A4374] ">{item.status}</h1>
                        <h2 className="text-[14px] mt-1 text-[#647196]">{item.description}</h2>
                        <div className="w-full flex flex-col gap-5 mt-8 max-[900px]:gap-2.5">
                            {item.cards.map((item2, index) => {
                                return <div className="w-full p-8 bg-white rounded-[5px] max-[900px]:py-5 max-[900px]:px-5 max-[900px]:min-h-[252px]" style={{ borderTop: `5px solid ${item2.color}` }} key={index}>
                                    <h2 className="text-[16px] text-[#647196] flex gap-3 items-center mb-2 max-[900px]:text-[13px]"><DotSvg color={item2.color} /> {item.status}</h2>
                                    <div className="">
                                        <h1 className="text-[18px] font-bold text-indigoink mb-1 hover:text-[#4661E6] max-[900px]:text-[13px] cursor-pointer">{item2.title}</h1>
                                        <h2 className="text-[#647196] text-[16px] max-[900px]:text-[13px]">{item2.description}</h2>
                                    </div >
                                    <button className="mt-4 text-[#4661E6] px-4 py-[6px] text-[13px] bg-[#F2F4FF] max-[900px]:text-[13px]  rounded-[10px] font-bold"> {item2.type}</button>
                                    <div className="mt-4 flex justify-between items-center">
                                        <button className="text-[13px] text-indigoink max-[900px]:text-[13px] px-4 py-2.5 font-bold hover:bg-[#CFD7FF] transition-all duration-300 active:bg-[#4661E6] active:text-white bg-[#F2F4FF] flex gap-2 items-center rounded-[10px]"><TopArrow />{item2.upvotes}</button>
                                        <div className="flex gap-3 items-center text-[16px] font-bold text-indigoink max-[900px]:text-[13px]"><CommentSvg />{item2.comments}</div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            })}
            <RoadMapMobile roadmap={roadmap} />
        </div>

    </>
}