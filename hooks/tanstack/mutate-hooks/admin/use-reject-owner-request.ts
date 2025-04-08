import { accetpOwnerRequest, rejectOwnerREquest } from "@/actions/admin/admin";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export const useRejectOwnerRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: rejectOwnerREquest,
    onSuccess: (res) => {
        if(res.success && res.message){
            queryClient.invalidateQueries({ queryKey: ["get-all-user-request"] })
        } 
    },
    onError: () => { },
    onSettled: () => { },
    onMutate: () => { },
})
}