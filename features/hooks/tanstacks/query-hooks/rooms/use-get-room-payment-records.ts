import { getRoomPaymentRecords } from "@/features/actions/rooms/rooms";
import { useQuery } from "@tanstack/react-query";

export  const fetch_room_payment_records = async(roomId : string) =>{
    const response = await getRoomPaymentRecords(roomId);
    return {
        message   : response.message,
        data : JSON.parse(response.data as string)
    };
}

export const useGetRoomPaymentRecords= (roomId : string) =>{
    return useQuery({
        queryKey : ["get-room-payment-records"],
        queryFn : () => fetch_room_payment_records(roomId),
    })
}   