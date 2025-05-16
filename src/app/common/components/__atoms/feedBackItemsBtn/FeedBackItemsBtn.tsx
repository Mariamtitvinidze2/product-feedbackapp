type button = {
    text: string
}

export default function FeedBackItemsBtn({ text }: button) {
    return <>
        <button className="px-4 py-1.5 bg-[#F2F4FF] rounded-[10px] text-[13px] font-semibold hover:bg-[#CFD7FF] active:bg-[#4461E6] active:text-white transition-all duration-200 text-[#4661E6]">{text}</button>
    </>
}