import { getRoomById } from "@/features/actions/rooms/rooms";
import { useQuery } from "@tanstack/react-query";

export  const fetch_room_by_id = async(id : string) =>{
    const response = await getRoomById(id);
    return {
        message   : response.message,
        data : JSON.parse(response.data as string)
    };
}

export const useGetRoomById = (id : string) =>{
    return useQuery({
        queryKey : ["get-room-by-id"],
        queryFn : () => fetch_room_by_id(id),
    })
}