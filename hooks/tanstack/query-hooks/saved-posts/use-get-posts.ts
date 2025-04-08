import { getPosts } from "@/actions/posts/post";
import { SearchParams } from "@/app/(root)/posts/page";
import { useQuery } from "@tanstack/react-query";

export  const fetchPosts = async( searchParams : SearchParams) =>{
    const response = await getPosts(searchParams);
    return response;
}

export const useGetPosts = (searchParams : SearchParams) =>{
    return useQuery({
        queryKey : ["get-posts"],
        queryFn : () => fetchPosts(searchParams),
    })
}