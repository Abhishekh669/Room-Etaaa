import { updatePaymentRecord } from "@/features/actions/rooms/rooms";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export const useUpdatePaymentRecord = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updatePaymentRecord,
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