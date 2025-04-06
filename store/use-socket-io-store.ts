import { io, Socket } from "socket.io-client"
import {create} from "zustand"

interface SocketStateType{
    socket : Socket | null,
    connectSocket : ()=> void,
    disconnectSocket : () => void,
}



export const useSocketStore = create<SocketStateType>((set,get)=>({
    socket : null,
    connectSocket : () => {
        if(get().socket?.connected) return;
        const url = "http://localhost:3000"
        const socket = io(url)
        socket.connect();
        set({socket : socket})

    },
    disconnectSocket : () => {
        if(get().socket?.connected){
            get().socket?.disconnect();
            set({socket : null})
        }
    }
}))