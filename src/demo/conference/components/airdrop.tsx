import { AirDropItem } from "../types";
import useCountDown from "../hooks/use-countdown";

function add0(num: number) {
    return num < 10 ?  `0${num}` : num;
}

export default function Airdrop({ item }: {item: AirDropItem}) {
    //console.log("🚀 ~ file:s airdrop.tsx:10 ~ Airdrop ~ item:", item)
    const { d, h, m, s } = useCountDown({
        currentTime: item.time,
        endTime: item.time! + 60 * 1000
        //endTime: 1688734122000
    }, () => {
        console.log('end...')
    }) 

    return <div className="my-2 mx-2 py-2 px-2 relative rounded-lg bg-airdrop-bg bg-100_100">
        <div className=" absolute left-2 h-[120px] w-[150px] bg-60% bg-airdrop-icon bg-no-repeat"></div>
        <div className="flex justify-between items-center">
            <div>
                <span className="text-[40px] font-bold">{item.amount}</span>
                <span className="text-[16px] font-bold ml-[5px]">{item.coin}</span>
            </div>
            <div className="w-16 text-center flex justify-center items-center">
                {item.image_url && <img className="w-10 h-10 m-0" src={item.image_url} alt="" />}
            </div>
        </div>
        <div className="flex justify-between items-center">
            <div className="text-[14px] font-semibold">
                <div>AirDrop</div>
                <div>Countdown:</div>
            </div>
            <div className="w-16 text-center">
                {item.time && <span className="text-[24px] font-bold">{add0(m) + ":" + add0(s)}</span>}
            </div>
        </div>
    </div>
}