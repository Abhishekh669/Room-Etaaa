import { getSavedPosts } from "@/actions/posts/saved-posts/saved-post";
import { useQuery } from "@tanstack/react-query";

export  const fetchSavedPosts = async( ) =>{
    const response = await getSavedPosts();
    return response;
}

export const useGetSavedPosts = () =>{
    return useQuery({
        queryKey : ["get-saved-posts"],
        queryFn : () => fetchSavedPosts(),
    })
}