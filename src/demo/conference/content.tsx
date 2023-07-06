import Airdrop from "./components/airdrop";
import Message from "./components/message";
import RedPacket from "./components/redPacket";
import ScanQRCode from './components/scanQRCode';
import { airdropList, messageList, redPacketList } from "./data";

const Content = ({ config }: any) => {
    console.log("🚀 ~ file: content.tsx:6 ~ Content ~ config:", config)
    return <div className="flex flex-1 bg-[black] overflow-hidden">
        <div className="w-[84%] border-r-4 border-[#413F4B] overflow-auto">
            <div className="h-48 overflow-auto border-4 border-yellow-500">
                <RedPacket item={redPacketList[1]} />
            </div>
            <div>
                {
                    messageList.map((item, index) => (<Message key={index} item={item}  />))
                }
            </div>
        </div>
        <div className="w-[15.9%] border-solid border-1 border-gray-50
         flex flex-col justify-between">
            <div className="overflow-auto">
                {
                    airdropList.map((item, index) => (<Airdrop key={index} item={item} />)) 
                }
            </div>
            
            <ScanQRCode 
                qr_airdrop={config.qr_airdrop}
                invitation_code={config.invitation_code}
                text_airdrop={config.text_airdrop}
             />
        </div>
    </div>
}

export default Content;