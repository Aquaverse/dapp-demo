
export interface AirDropItem {
    amount: string;
    body: string;
    coin: string;
    image_url: string;
    msgtag: string;
    msgtype: string;
    ps: string;
    reward_num: string;
    sender: string;
    time?: string;
}


export interface RedPacketItem {
    amount: string;
    body: string;
    coin: string;
    gift_id: string;
    msgtag: string;
    msgtype: string;
    ps: string;
    sender: string;
}

export interface MessageItem {
    amount?: string;
    body: string;
    coin?: string;
    gift_id?: string;
    msgtag: string;
    msgtype: string;
    ps?: string;
    sender: string;
    name?: string;
}