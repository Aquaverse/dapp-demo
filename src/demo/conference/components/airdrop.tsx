import { AirDropItem } from "../types";

export default function Airdrop({ item }: any) {
    console.log("🚀 ~ file: airdrop.tsx:4 ~ Airdrop ~ item:", item)
    const isNft = false
    const isCrypto = item.amount || false;

    return <div className="my-2 mx-2 py-2 px-2 rounded-xl bg-airdrop-bg bg-cover bg-center bg-origin-border">
        <div className="flex justify-between items-center">
            <div>
                <span className="text-[40px] font-bold">{item.amount}</span>
                <span className="text-[16px] font-bold">{item.coin}</span>
            </div>
            <div className="w-16 text-center">
                {item.image_url && <img className="w-10 h-10 m-0" src={item.image_url} alt="" />}
            </div>
        </div>
        <div className="flex justify-between items-center">
            <div className="text-[14px] font-semibold">
                <div>AirDrop</div>
                <div>Countdown:</div>
            </div>
            <div className="w-16 text-center">
                {item.time && <span className="text-[24px] font-bold">{item.time}</span>}
            </div>
        </div>
    </div>
}