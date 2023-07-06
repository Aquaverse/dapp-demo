export default function ScanQRCode ({
        text_airdrop,
        invitation_code, 
        qr_airdrop
    }: { 
        text_airdrop?: string
        invitation_code?: string 
        qr_airdrop?: string
    }) {
    return (
        <div className="py-2 px-2 border-t-4 border-[#413F4B]">
            <div className="text-white font-semibold text-base">{text_airdrop}</div>
            <div className="text-white font-semibold text-base">{invitation_code}:</div>
            <div className="mt-1 w-full rounded-xl overflow-auto">
                <img className="w-full" src={qr_airdrop} alt="" />
            </div>
        </div>
    )
}