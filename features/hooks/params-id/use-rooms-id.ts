import { useParams } from "next/navigation";

export const useRoomId = () =>{
    const params = useParams<{id : string}>();
    return params.id;
}