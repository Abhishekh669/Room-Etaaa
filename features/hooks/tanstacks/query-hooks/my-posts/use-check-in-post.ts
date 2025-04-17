import { getUsersRequests } from "@/features/actions/admin/admin";
import { useQuery } from "@tanstack/react-query";

export  const fetchForCheckInMyPosts = async( ) =>{
    const response = await getUsersRequests();
    return {
        message : response.message,
        ownerReqeust : JSON.parse(response.ownerRequest as string)
    };
}

export const useGetUsersForOwner = () =>{
    return useQuery({
        queryKey : ["isInMyPosts"],
        queryFn : () => fetchForCheckInMyPosts(),
    })
}