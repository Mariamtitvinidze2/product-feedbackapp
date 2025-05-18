type buttonClass = {
    color: string,
    text: string,
    fun?: () => void
}

export default function EditFeedBackBtn({ color, text, fun }: buttonClass) {
    console.log(color, 'color')
    return <>
        <button style={{ backgroundColor: color }} onClick={fun} className={` px-6 py-3 rounded-[10px]  font-bold text-[14px] text-white`}>{text}</button>
    </>
}