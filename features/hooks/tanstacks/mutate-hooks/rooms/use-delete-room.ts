    import { deleteRoom } from "@/features/actions/rooms/rooms";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export const useDeleteRoom = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteRoom,
    onSuccess: (res) => {
        if(res.success){
            queryClient.invalidateQueries({queryKey : ["get-room-statistics"]})
        }
    },
    onError: () => { },
    onSettled: () => { },
    onMutate: () => { },
})
}