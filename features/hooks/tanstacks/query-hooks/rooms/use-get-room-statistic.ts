import { getRoomStatistics } from "@/features/actions/rooms/rooms";
import { useQuery } from "@tanstack/react-query";

export  const fetch_room_statistics = async() =>{
    const response = await getRoomStatistics();
    return {
        message   : response.message,
        data : JSON.parse(response.data as string)
    };
}

export const useGetRoomStatistics= () =>{
    return useQuery({
        queryKey : ["get-room-statistics"],
        queryFn : () => fetch_room_statistics(),
    })
}