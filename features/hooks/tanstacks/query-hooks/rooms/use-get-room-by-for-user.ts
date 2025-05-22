import {  getRoomByIdForUsers } from "@/features/actions/rooms/rooms";
import { useQuery } from "@tanstack/react-query";

export  const fetch_room_by_id = async(id : string) =>{
    const response = await getRoomByIdForUsers(id);
    return {
        message   : response.message,
        data : JSON.parse(response.data as string)
    };
}

export const useGetRoomByIdForUsers = (id : string) =>{
    return useQuery({
        queryKey : ["get-room-by-id-for-users"],
        queryFn : () => fetch_room_by_id(id),
    })
}