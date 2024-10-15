import { useState } from "react"
import { IoIosSwitch } from "react-icons/io";


export const ToggleButton = () => {

    const handleToggleButton = () => {
        setIsOn(!isOn);
    }
    const [isOn, setIsOn] = useState(0);

    const CheckIsOn = isOn ? "ON " : "OFF";

    const OnOffColor = isOn ? " bg-green-500   " : " bg-red-500  ";
    const Translate  = isOn ? "translate-x-52 duration-300" : "translate-x-0 duration-300";
    return (

        <div className="flex justify-center items-center p-36">
            <div className={`text-center w-96 h-36 p-5 bg-gray-400 rounded-3xl m-9 `} onClick={handleToggleButton}>
                <div className="w-24 mt-4"  >
                    <h1 className={`rounded-full border-2 border-solid border-black 
                 text-white p-6 flex justify-start items-start
                  ${OnOffColor} ${Translate} `} >
                        {CheckIsOn} </h1></div>
            </div>
        </div>
    )
}