import { accetpOwnerRequest } from "@/actions/admin/admin";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export const useAccetpOwnerRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: accetpOwnerRequest,
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