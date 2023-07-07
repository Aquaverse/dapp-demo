import { RedPacketItem } from "../types";
import { SplitDiv } from "./RedPacket";
import A11 from '../../../assets/conference/a11.a4c23105899740c60cd9.webp'

export default function Crypto({ item }: {item: RedPacketItem}) {
    const isImg = item?.coin
        && item?.coin.startsWith('http')
    return (
        <div className=" py-2 px-2 flex flex-col justify-around h-full">
        <div className="flex justify-end h-9">
            {
                isImg ? 
                    <div className="flex justify-between items-center">
                       <img className="h-full" src={item.coin} alt="" /> 
                       <span className="text-[36px] font-bold ml-1">{item.amount}</span>
                    </div>
                    : <div className="flex justify-between items-center">
                        <span>{item.amount}</span>
                        <span>{item.coin}</span>
                    </div>
            }
        </div>
        <div className="text-base font-medium opacity-80 text-right mr-2">Received 3 / 8</div>
        <SplitDiv />
        <div className="flex justify-end items-center">
            <div className="h-8 w-8 rounded-md overflow-auto">
                <img className="w-full h-full" src={A11} alt="" />
            </div>
            <div className="text-xl font-medium opacity-80 ml-2">Jafaris received</div>
        </div>
        <div className="flex justify-end h-9">
            {
                isImg ? 
                    <div className="flex justify-between items-center">
                       <img className="h-[24px]" src={item.coin} alt="" /> 
                       <span className="text-[24px] font-bold ml-1">{item.amount}</span>
                    </div>
                    : <div className="flex justify-between items-center">
                        <span className="text-[24px] font-bold mr-1">{item.amount}</span>
                        <span>{item.coin}</span>
                    </div>
            }
        </div>
    </div> 
    )
}