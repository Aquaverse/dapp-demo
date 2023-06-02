import { useState } from "react";
import { handshake } from "../../utils";
import './index.css'
import copy from "copy-to-clipboard";

function shortStr(text: string){
    return text.slice(0,6) + "..." + text.slice(-5);
}

const list = [
    {
        action: 'Invite',
        title: 'Invite',
        desc: 'Invite',
        onClick: () => {
            const roomContext = JSON.parse(localStorage.getItem('roomContext') ?? 'null')
            if (!roomContext) console.log('no roomContext...')
            handshake.then(parent => {
                parent.emit('message.sending.me', {
                    payload: {
                        action: 'view_invite',
                        roomId: roomContext.roomId,
                    },
                });
            })
        }
    },
    {
        action: 'Bind wallet',
        title: 'Bind wallet',
        desc: 'Bind wallet',
        onClick: () => {
            const walletAddress = '0xE6D0Dd18C6C3a9Af8C2FaB57d6e6A38E29d513cC';
            console.log("🚀 ~ file: index.tsx:29 ~ walletAddress:", walletAddress)
            handshake.then(parent => {
                parent.emit('message.sending.me', {
                    payload: {
                        action: 'dapp_selected_wallet_address',
                        walletAddress
                    }
                });
            })
        }
    },
    {
        action: 'Open gif',
        title: 'Open gif',
        desc: 'Open gif component',
        onClick: () => {
            handshake.then(parent => {
                parent.emit('message.sending.me', {
                    payload: {
                        action: 'emoji_show',
                        from: 'dapp'
                    },
                });
            })
        }
    },
    {
        action: 'audio player',
        title: 'Audio player',
        desc: 'Open audio player',
        onClick: () => {
            const info = {"actInfo":{"url":"https://beta-sdm.soshow.io/#/?space=1dRKZMOLEwXxB","title":"Web3 Summer Summit SocialFi","host_avatar":"https://pbs.twimg.com/profile_images/1529723751830413312/oQOsMQDG_400x400.jpg","host":"BuidlerDAO","tag_text":""},"audioSource":"https://prod-fastly-ap-northeast-2.video.pscp.tv/Transcoding/v1/hls/Ooev7bXG3pnxQZU4FfkMny5bAfTh03hslC_STS6fg0ohTc9HA8kfScvTRxa01sHNnHL5urb0VNOZvbu9OgG6Bw/non_transcode/ap-northeast-2/periscope-replay-direct-prod-ap-northeast-2-public/audio-space/playlist_16763527598977782307.m3u8?type=replay"}
            handshake.then(parent => {
                parent.emit('SOSHOW-OPEN-SMD-AUDIO', info);
            })
        }
    },
    {
        action: 'copy',
        title: 'copy demo',
        desc: 'testing copy action',
        onClick: () => {
            copy('aaaa bbbb cccc'!)
            alert('copied!')
        }
    }
]

const App = () => {
    return (
            <div className="container overflow-y-auto">
                <div className="navbar bg-base-100 sticky top-0">
                    <a className="btn btn-ghost normal-case text-xl">DApp Demo</a>
                </div>
                <div className="demo_container">
                    {
                        list.map(item => (
                            <div className="card w-96 bg-base-100 shadow-xl mb-5">
                                <div className="card-body">
                                    <h2 className="card-title">{item.title}</h2>
                                    <p>{item.desc}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary" onClick={item.onClick}>Trigger</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="test_aaa">
                    6
                </div>
        </div>
    )
}

export default App;