import { getUserSession } from "@/features/actions/users/user";
import { User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

export  const fetch_user_sesion = async() =>{
    const response = await getUserSession();
    return response as User;
}

export const useGetUserSession = () =>{
    return useQuery({
        queryKey : ["get-user-session"],
        queryFn : () => fetch_user_sesion(),
    })
}