import { MessageItem } from "../types";

import A10 from '../../../assets/conference/a10.2fb452b3382522219650.webp'

const Message = ({ item }: {item: MessageItem}) => {
    return (
        <div className="w-full h-48 border-b-4 border-l-4 border-l-transparent border-[#413F4B] flex">
            <div className="relative h-48 w-48 flex flex-col justify-center items-center">
                <div className="text-2xl font-extrabold mb-3">{item.name}</div>
                <div className="w-24 h-24 rounded-lg overflow-hidden">
                    <img className="w-full h-full" src={A10} alt="" />
                </div>
                <div className="h-[80%] border-r-2 border-white opacity-20 absolute right-0"></div>
            </div>
            <div className="flex-1 flex">
                <div className="w-[88%] h-full py-10 px-10">
                    <p className="font-medium text-4xl line-clamp-3">{item.ps || item.body}</p>
                </div>
                <div className="w-[12%] h-full text-center relative">
                    <div className="w-full absolute bottom-1 font-medium text-2xl opacity-60">11:22AM</div>
                </div>
            </div>
        </div>
    )
}

export default Message;