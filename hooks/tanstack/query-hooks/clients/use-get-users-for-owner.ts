import { getUsersForOwner } from "@/actions/client/client";
import { useQuery } from "@tanstack/react-query";

export  const fetchUsersForOwner = async( ) =>{
    const response = await getUsersForOwner();
    return response;
}

export const useGetUsersForOwner = () =>{
    return useQuery({
        queryKey : ["get-users-for-owner"],
        queryFn : () => fetchUsersForOwner(),
    })
}