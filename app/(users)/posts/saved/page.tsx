"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { ArrowLeft, BookmarkX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { deleteSavedPost } from "@/features/actions/saved-posts/saved-post"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getSavedPosts } from "@/features/actions/saved-posts/saved-post"
import { toast } from "sonner"
import { SavedPostCard } from "@/components/posts/saved-posts/saved-post-card"
const SavedPage = () => {
  const queryClient = useQueryClient()
  const { data: savedPosts, isLoading } = useQuery({
    queryKey: ["get-saved-posts"],
    queryFn: getSavedPosts
  })
  const router = useRouter()

  const { mutate: delete_saved_post, isPending: isDeleting } = useMutation({
    mutationFn: deleteSavedPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-saved-posts"] })
    }
  })

  const handleRemoveSavedPost = (id: string) => {
    if (!id || isDeleting) return;
    delete_saved_post(id, {
      onSuccess: (res) => {
        if (res.success) {
          toast.success("Saved post removed")
        } else if (res.error) {
          toast.error(res.error)
        } else {
          toast.error("Something went wrong")
        }
      },
      onError: () => {
        toast.error("Failed to remove saved post")
      }
    })
  }

  console.log(savedPosts)

  if (isLoading) {
    return <SavedPostsLoading />
  }

  if (!savedPosts || "error" in savedPosts || (savedPosts && savedPosts.length === 0)) {
    return (<div className="w-full min-h-screen p-10">
      <div className="mb-8">
        <span className="text-3xl font-bold mb-2 new-font">Saved <span className="text-red-600">Rooms</span></span>
        <Button variant={"outline"} onClick={() => router.push("/posts")}>
          <ArrowLeft />
          Go Back
        </Button>
        <p className="text-muted-foreground">Manage your saved listings and inquire about availability</p>
      </div>
      <div className="flex flex-col items-center justify-center py-16 space-y-4 h-full">

        <div className="bg-muted/30 p-4 rounded-full">
          <BookmarkX className="h-12 w-12 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-medium">No saved rooms</h3>
        <p className="text-muted-foreground text-center max-w-md">
          You haven't saved any rooms yet. Browse available listings and click the "Save" button to add them here.
        </p>
      </div>
    </div>)
  }

  return (
    <div className="max-h-screen h-screen">
      <div className="space-y-2 p-3 mb-2 shadow-sm rounded-lg ">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold mb-2 new-font">Saved <span className="text-red-600">Rooms</span></p>
          <Button variant={"outline"} onClick={() => router.push("/posts")}>
            <ArrowLeft />
            Go Back
          </Button>
        </div>
        <p className="text-muted-foreground">Manage your saved listings and inquire about availability</p>
      </div>

      <div className=" max-h-[85%] h-full mx-1 my-2">
        <div className="max-h-full space-y-4 overflow-y-auto p-2">
        {savedPosts.length > 0 && savedPosts.map((savedPost) => (
          <SavedPostCard key={savedPost.id} savedPost={savedPost} onRemove={handleRemoveSavedPost} />
        ))}
        </div>
      </div>
    </div>
  )
}

export default SavedPage

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

