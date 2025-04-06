"use client"

import { useGetSavedPosts } from "@/hooks/tanstack/query-hooks/saved-posts/use-get-saved-post"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowLeft, BookmarkX } from "lucide-react"
import { SavedPostCard } from "@/components/posts/saved-post/saved-post-card"
import { deleteSavedPost } from "@/actions/posts/saved-posts/saved-post"
import toast from "react-hot-toast"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const SavedPage = () => {
  const { data: savedPosts, isLoading, refetch } = useGetSavedPosts()
  const router = useRouter()


  const handleRemoveSavedPost = async (id: string) => {

    const res  =await deleteSavedPost(id)
    if(res.message && res.success){
      toast.success(res.message)
      refetch()
    } else if(res.error){
      toast.error(res.error)
    } else{
      toast.error('something went wrong')
    }
  }



  if (isLoading) {
    return <SavedPostsLoading />
  }

  if(!savedPosts || "error" in savedPosts){
    return (<>
          <div className="flex flex-col items-center justify-center py-16 space-y-4">
          <div className="bg-muted/30 p-4 rounded-full">
            <BookmarkX className="h-12 w-12 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-medium">No saved rooms</h3>
          <p className="text-muted-foreground text-center max-w-md">
            You haven't saved any rooms yet. Browse available listings and click the "Save" button to add them here.
          </p>
        </div>
    </>)
  }

  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Saved Rooms</h1>
        <Button variant={"outline"} onClick={() => router.back()}>
        <ArrowLeft />
        Go Back
      </Button>
        <p className="text-muted-foreground">Manage your saved listings and inquire about availability</p>
      </div>
    

     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedPosts.length > 0 && savedPosts.map((savedPost) => (
            <SavedPostCard key={savedPost.id} savedPost={savedPost} onRemove={handleRemoveSavedPost} />
          ))}
        </div>
    </div>
  )
}

export default SavedPage

// Loading skeleton component
function SavedPostsLoading() {
  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <Skeleton className="h-8 w-[200px] mb-2" />
        <Skeleton className="h-4 w-[300px]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-48 w-full rounded-lg" />
            <div className="space-y-2 p-4">
              <div className="flex justify-between">
                <Skeleton className="h-5 w-[120px]" />
                <Skeleton className="h-5 w-[80px]" />
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/2" />
              <div className="flex gap-2 pt-4">
                <Skeleton className="h-9 w-1/2" />
                <Skeleton className="h-9 w-1/2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

