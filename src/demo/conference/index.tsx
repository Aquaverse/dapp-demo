import Content from "./content";
import Header from "./header";

const config = {
    banner_h5: 'https://d1q7fiu45lygg8.cloudfront.net/bundles/activity/imgData/1686142966888-img-header-Mob-NYC.png',
    banner_web: 'https://d1q7fiu45lygg8.cloudfront.net/bundles/activity/imgData/1686812723750-img-NYC.png',
    qr_squad: 'https://d1q7fiu45lygg8.cloudfront.net/bundles/activity/imgData/1686815316034-MoneyGunAminationTesting二维码.png',
    qr_airdrop: "https://d1q7fiu45lygg8.cloudfront.net/bundles/activity/imgData/1686815316034-MoneyGunAminationTesting二维码.png",
    link_airdrop: "",
    link_sdingme: "https://app-alpha.sending.me/share/?room=!sddFOSzQNUQvUrsJTr:hs-alpha.sending.me&via=hs-alpha.sending.me&nac=ABCDEF",
    link_room: "https://app-alpha.sending.me/share/?room=!sddFOSzQNUQvUrsJTr:hs-alpha.sending.me&via=hs-alpha.sending.me&nac=ABCDEF",
    text_airdrop: "Scan this code to join us",
    invitation_code: "ABCDEF",
    avatars: [
        'https://d1q7fiu45lygg8.cloudfront.net/bundles/activity/imgData/1686143227961-img-NYC-4.png',
    ]
}

function paramByName(key: string) {
    const params = window.location.search?.replace(/^\?/, '').split('&');
    for (let item of params) {
        if (item.startsWith(`${key}=`)) {
            return decodeURIComponent(item.replace(`${key}=`, '') ?? '');
        }
    }
    return '';
}

export default function Conference() {
    const roomId = paramByName('room');
    console.log("🚀 ~ file: index.tsx:35 ~ roomId:", roomId)

    return (
        <div className="w-full h-screen flex flex-col text-white">
            <Header config={config} />
            <Content config={config} />
        </div>
    )
}