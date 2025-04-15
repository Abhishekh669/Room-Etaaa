import { addPaymentRecord, deletePaymentRecord } from "@/features/actions/rooms/rooms";
import { useMutation, useQueryClient } from "@tanstack/react-query";
    export const useDeletePaymentRecords = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePaymentRecord,
    onSuccess: (res) => {
        if(res.success){
            queryClient.invalidateQueries({ queryKey: ["get-room-payment-records"] })
            }
    },
    onError: () => { },
    onSettled: () => { },
    onMutate: () => { },
})
}