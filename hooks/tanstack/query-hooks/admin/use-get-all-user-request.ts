import { getUsersRequests } from "@/actions/admin/admin";
import { useQuery } from "@tanstack/react-query";

export  const fetchGetUserRequest = async( ) =>{
    const response = await getUsersRequests();
    return response;
}

export const useGetAllUserRequest = () =>{
    return useQuery({
        queryKey : ["get-all-user-request"],
        queryFn : () => fetchGetUserRequest(),
    })
}