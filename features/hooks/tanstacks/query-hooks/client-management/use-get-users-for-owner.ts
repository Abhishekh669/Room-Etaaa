import { useQuery } from "@tanstack/react-query";
import { getClientsForOwner } from "@/features/actions/client-management/client-management";
export const fetchUsersForOwner = async () => {
    const response = await getClientsForOwner();
    return response;
}

export const useGetUsersForOwner = () => {
    return useQuery({
        queryKey: ["get-users-for-owner"],
        queryFn: () => fetchUsersForOwner(),
    })
}