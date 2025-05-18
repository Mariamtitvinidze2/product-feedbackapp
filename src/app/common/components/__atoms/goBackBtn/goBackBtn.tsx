import { useRouter } from "next/navigation";
import LeftArrow from "@/app/common/icons/LeftArrow";
type BtnClass = {
    className: string
}
export default function GoBackBtn({ className }: BtnClass) {
    const router = useRouter()
    const GoBack = () => {
        router.push('/inside')
    }
    return <>
        <button onClick={GoBack} className="flex gap-3 items-center "><LeftArrow /><h2 className={`text-[${className}] font-bold hover:underline  text-[14px] max-[713px]:text-[13px]`}>Go Back</h2></button>

    </>
}