import { RedPacketItem } from "../types";
import A10 from '../../../assets/conference/a10.2fb452b3382522219650.webp'
import Nft from "./Nft";
import Crypto from "./Crypto";

const RedPacket = ({ item }: {item: RedPacketItem}) => {
    return (
        <div className="w-full h-full border-b-4 border-4 border-yellow-500 flex bg-gradient-to-r from-[#7C4902] to-[#C8811E] relative">
            <div className="relative h-full w-48 flex flex-col justify-center items-center">
                <div className="text-2xl font-extrabold mb-3">{item.name}</div>
                <div className="w-24 h-24">
                    <img className="w-full h-full" src={A10} alt="" />
                </div>
                <div className="h-[80%] border-r-2 border-white opacity-20 absolute right-0"></div>
            </div>
            <div className="flex-1 flex">
                <div className="flex w-[60%]">
                    <div className="w-[88%] h-full py-10 px-10">
                        <p className="font-medium text-4xl line-clamp-3">{item.ps || item.body}</p>
                    </div>
                    <div className="w-[12%] h-full text-center relative">
                        <div className="w-full absolute bottom-1 font-medium text-2xl opacity-60">11:22AM</div>
                    </div>
                </div>
                <div className="w-[40%]">
                    {
                        item.nft_list ?  
                            <Nft item={item} /> 
                            : <Crypto item={item} />
                    }
                </div>
            </div>
            <div className="w-[480px] h-[90%] bg-money-gun absolute right-0 bg-center bg-cover bg-no-repeat"></div>
        </div>
    )
}

export default RedPacket;