'use client'
import CommentSvg from "@/app/common/icons/CommentSev"
import DotSvg from "@/app/common/icons/DotSvg"
import TopArrow from "@/app/common/icons/TopArrow"
import { FeedbackBoard } from "@/app/common/types/types"

import { useEffect, useState } from "react"
type roadmap = {
    roadmap: FeedbackBoard
}
export default function RoadMapMobile({ roadmap }: roadmap) {
    const [value, setValue] = useState(0)
    const [status, setStatus] = useState('Planned')
    const changeFeedback = (index: number, status: string) => {
        setValue(index)
        setStatus(status)
    }
    return <>
        <div className="hidden w-full max-[713px]:flex flex-col ">
            <div className="flex w-full">{roadmap.map((item, index) => {
                return <div className={`flex-1 w-full  ${value === index ? 'border-b-[4px]' : 'border-b-[2px]'} py-5  `} key={index} style={{
                    borderColor: value === index ? item.color : 'rgba(140, 146, 179, 0.25)'
                }}><button onClick={() => changeFeedback(index, item.status)} className={`w-full font-bold text-[14px] ${value === index ? 'text-[#3A4374] ' : 'text-[#3A4374] opacity-40'} `}>{item.status} ({item.cards.length})</button></div>
            })}</div>
            <div className="p-6">
                {roadmap.filter(el => el.status === status).map((item, index) => {
                    console.log(item)
                    return <div className="w-full max-w-[350px] max-[900px]:max-w-[243px] max-[713px]:max-w-[708px]" key={index}>
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
            </div>
        </div >
    </>
}