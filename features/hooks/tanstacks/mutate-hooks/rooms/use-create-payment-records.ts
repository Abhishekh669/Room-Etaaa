import { addPaymentRecord } from "@/features/actions/rooms/rooms";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export const useCreatePaymentRecords = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addPaymentRecord,
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