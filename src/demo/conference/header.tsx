import SdmIcon from '../../assets/conference/img-SDM.webp';
export function Header({ config }: any) {
    return (
        <div className="h-auto flex-none relative">
            <img className="h-full" src={config.banner_web} alt="" />
            <a className="absolute top-[1.6vw] left-[65.8vw] w-[12.5vw]" href={config.link_sdingme} target="_blank">
                <img src={SdmIcon} alt="" />
            </a>
        </div>
    )
}

export default Header