import Postmate from "postmate";

type DAppRoomContext = {
    userId: string;
    roomId: string;
    squadId?: string; // squadId 有 则表示是SquadRoom
    isDirect: boolean;
}

enum DAppRoomContextAction {
    fetchRoomContext = 'fetchRoomContext',
    receiveGif = 'receiveGif'
}


interface PostmateModel {
    [DAppRoomContextAction.fetchRoomContext]: (data: DAppRoomContext) => void
    [DAppRoomContextAction.receiveGif]: (data: any) => void
}


const model: PostmateModel = {
    fetchRoomContext: (data) => {
        console.log('roomContext:', data)
        localStorage.setItem('roomContext', JSON.stringify(data))
    },
    receiveGif: (data) => {
        console.log("🚀 ~ file: index.tsx:32 ~ model: PostmateModel.data:", data)
    }
}

export const handshake = new Postmate.Model(model);