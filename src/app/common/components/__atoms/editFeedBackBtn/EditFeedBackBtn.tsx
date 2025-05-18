type buttonClass = {
    color: string,
    text: string
}

export default function EditFeedBackBtn({ color, text }: buttonClass) {
    console.log(color, 'color')
    return <>
        <button style={{ backgroundColor: color }} className={` px-6 py-3 rounded-[10px]  font-bold text-[14px] text-white`}>{text}</button>
    </>
}