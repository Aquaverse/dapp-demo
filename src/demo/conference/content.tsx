import Airdrop from "./components/Airdrop";
import Message from "./components/Message";
import RedPacket from "./components/RedPacket";
import ScanQRCode from './components/ScanQRCode';
import { airdropList, messageList, redPacketList } from "./data";

const Content = ({ config }: any) => {
    return <div className="flex flex-1 bg-[black] overflow-hidden">
        <div className="w-[84%] border-r-4 border-[#413F4B] overflow-auto">
            <div className="h-48 overflow-auto">
                <RedPacket item={redPacketList[0]} />
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