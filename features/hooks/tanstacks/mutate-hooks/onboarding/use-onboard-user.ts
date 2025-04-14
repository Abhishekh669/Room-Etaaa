import { onboardUser } from "@/features/actions/users/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export const useOnboardUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: onboardUser,
    onSuccess: (res) => {
        if(res.success && res.message){
            queryClient.invalidateQueries({ queryKey: ["get-user-session"] })
        } 
    },
    onError: () => { },
    onSettled: () => { },
    onMutate: () => { },
})
}