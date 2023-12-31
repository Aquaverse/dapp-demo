import { RedPacketItem } from "../types";
import { SplitDiv } from "./RedPacket";
import A11 from '../../../assets/conference/a11.a4c23105899740c60cd9.webp'

export default function Nft({item}: {item: RedPacketItem}) {
    return <div className=" py-2 px-2 flex flex-col justify-around h-full">
        <div className="flex justify-end">
            {
               item.nft_list?.map((item,index) => (
                <div key={index} className="border-2 border-[#FFEDD2] rounded-md overflow-hidden w-9 h-9 mr-2">
                    {
                        !item.collection_image_url && !item.collection_name && 
                        <div className="w-full h-full bg-[#4A370B]"></div>
                    }
                    {
                        !item.collection_image_url && item.collection_name && 
                        <div className="w-full h-full bg-[#4A370B] text-sm font-semibold text-center leading-8">{item.collection_name.substring(0, 1)}</div>
                    }
                    {
                       item.collection_image_url && <img className="w-full h-full" src={item.collection_image_url} alt="" /> 
                    }
                </div>
               )) 
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
        <div className="flex justify-end">
            {
                item.nft_list?.map((item, index) => (
                    <div key={index} className="flex w-[62px] h-[26px] bg-[rgba(0,0,0,0.4)] rounded-full mr-2">
                        <div>
                            {
                                !item.collection_image_url && !item.collection_name && 
                                <div className="w-[26px] h-full rounded-full bg-[#4A370B]"></div>
                            }
                            {
                                !item.collection_image_url && item.collection_name && 
                                <div className="h-full bg-[#4A370B] rounded-full text-sm font-semibold w-[26px] text-center leading-6">{item.collection_name.substring(0, 1)}</div>
                            }
                            {
                                item.collection_image_url && <img className="w-full h-full" src={item.collection_image_url} alt="" /> 
                            }
                        </div>
                        <div className="text-base font-semibold ml-1">x {item.collection_nft_num}</div>
                    </div>
                ))
            }
        </div>
    </div>
}