import Airdrop from "./components/airdrop";
import RedPacket from "./components/redPacket";
import ScanQRCode from "./components/scanQRCode";

const Content = ({ config }: any) => {
    console.log("🚀 ~ file: content.tsx:6 ~ Content ~ config:", config)
    return <div className="flex flex-1">
        <div className="w-[84%] border-solid border-1 border-gray-50">
            <RedPacket />
        </div>
        <div className="w-[15.9%] border-solid border-1 border-gray-50
         flex flex-col justify-between">
            <Airdrop />
            <ScanQRCode 
                qr_airdrop={config.qr_airdrop}
                invitation_code={config.invitation_code}
                text_airdrop={config.text_airdrop}
             />
        </div>
    </div>
}

export default Content;