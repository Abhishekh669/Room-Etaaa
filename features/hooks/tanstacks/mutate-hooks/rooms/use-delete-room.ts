    import { deleteRoom } from "@/features/actions/rooms/rooms";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export const useDeleteRoom = () => {
  return useMutation({
    mutationFn: deleteRoom,
    onSuccess: () => {
        
    },
    onError: () => { },
    onSettled: () => { },
    onMutate: () => { },
})
}