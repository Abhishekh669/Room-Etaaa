import { deleteUserFromRoom } from "@/actions/client/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export const useDeleteUserFromRoom = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUserFromRoom,
    onSuccess: (res) => {
        if(res.success && res.message){
            queryClient.invalidateQueries({ queryKey: ["get-users-for-owner"] })
        } 
    },
    onError: () => { },
    onSettled: () => { },
    onMutate: () => { },
})
}