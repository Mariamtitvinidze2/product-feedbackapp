
import EditFeedBackForm from "../../__molecules/EditFeedBackForm/EditFeedBackForm";

export default function EditFeedback() {
    return <>
        <div className="w-full px-[42px] pt-[52px] rounded-[10px] flex flex-col gap-[75px] pb-10 bg-white relative max-[550px]:gap-6 max-[550px]:p-6 max-[550px]:pt-11">
            <div className="absolute  -top-7  max-[550px]:-top-5 "><svg xmlns="http://www.w3.org/2000/svg" className="w-[56px] h-[56px] max-[550px]:w-1- max-[550px]:h-10 " viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="28" fill="url(#paint0_radial_0_1978)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.0825 19.4809L32.8315 16L39.345 22.2719L35.7969 25.952L29.0825 19.4809ZM16 39.5949C16.9207 35.6533 19.4867 25.5743 19.4867 25.5743L27.6895 20.7535L34.5209 27.1499L29.3017 34.97L16.313 40L22.4703 34.2104C23.513 34.5998 24.9857 34.2478 25.7818 33.3736C26.8328 32.2255 26.7539 30.4423 25.605 29.3914C24.456 28.3404 22.5848 28.3404 21.5339 29.4885C20.751 30.3444 20.4812 31.8544 20.9287 32.8498L16 39.5949Z" fill="white" />
                <defs>
                    <radialGradient id="paint0_radial_0_1978" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.184 -5.81647) rotate(129.411) scale(93.4169)">
                        <stop stop-color="#E84D70" />
                        <stop offset="0.530886" stop-color="#A337F6" />
                        <stop offset="1" stop-color="#28A7ED" />
                    </radialGradient>
                </defs>
            </svg></div>

            <EditFeedBackForm />
        </div>
    </>
}
