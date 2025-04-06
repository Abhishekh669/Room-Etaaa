import { toggleSavePost } from "@/actions/posts/saved-posts/saved-post";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export const useToggleSavePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: toggleSavePost,
    onSuccess: (res) => {
        if(res.success && res.message){
            queryClient.invalidateQueries({ queryKey: ["get-posts"] })
        } 
    },
    onError: () => { },
    onSettled: () => { },
    onMutate: () => { },
})
}