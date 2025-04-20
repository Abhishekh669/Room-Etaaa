"use client"
import { getAllPosts } from "@/features/actions/posts/posts"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { AlertTriangle, Home, MapPin, Star, TrendingUp, Users, Menu } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PostFilters } from "@/components/posts/post-filter"
import { PostCard } from "@/components/posts/post-card"
import { useMutation } from "@tanstack/react-query"
import Image from "next/image"
import { toggleSavePost } from "@/features/actions/saved-posts/saved-post"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { PostFiltersForMobile } from "@/components/posts/post-mobile-view-filter"

function PostMainPage() {
  const queryClient = useQueryClient()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const searchParams = useSearchParams()
  const params = {
    location: searchParams.get("location") || undefined,
    minPrice: searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : undefined,
    maxPrice: searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : undefined,
    numberOfRooms: searchParams.get("numberOfRooms") ? Number(searchParams.get("numberOfRooms")) : undefined,
    title: searchParams.get("title") || undefined,
    topSearch: searchParams.get("topSearch") === "true",
  }

  const {
    data: postsData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["get-all-posts", params],
    queryFn: () => getAllPosts(params),
    select: (data) => {
      if ("error" in data) return []
      return data
    },
  })

  const { mutate: savePost, isPending: isSaving } = useMutation({
    mutationFn: toggleSavePost,
    onSuccess: (res) => {
      if (res.success) {
        queryClient.invalidateQueries({ queryKey: ["get-all-posts", params] })
      }
    },
  })

  const handleSavePost = async (postId: string, userId: string) => {
    if (!userId || !postId) return
    savePost(
      { postId, userId },
      {
        onSuccess: (res) => {
          if (res.message && res.success) {
            toast.success(res.message)
          } else if (res.error) {
            toast.error(res.error)
          }
        },
        onError: () => {
          toast.error("Something went wrong while saving the post")
        },
      },
    )
  }

  return (
    <div className="max-h-screen overflow-y-hidden w-full  md:px-4 lg:px-32">
      <div className="space-y-4">
        <div className="md:hidden">
          <PostFiltersForMobile open={open} onClose={() => setOpen(false)} />
        </div>

        <div className="w-full px-4 py-3 md:py-4 shadow-md rounded-md mx-1">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold new-font">
                Available <span className="text-red-600">Rooms</span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-base mt-1">Find your perfect living space</p>
            </div>
            <div className="w-full md:w-auto flex items-center justify-between gap-2 md:gap-3">
              <Button
                onClick={() => router.push("/posts/saved")}
                variant={"outline"}
                className="bg-red-500 text-white hover:bg-red-500/80 md:px-4 md:py-2"
                disabled={isSaving}
                size="sm"
              >
                Saved Posts
              </Button>
              <Button variant="outline" className="md:hidden" size="sm" onClick={() => setOpen(true)}>
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>



        <div className="mx-1 bg-white shadow-none my-2 md:mx-2 md:my-3 rounded-md border-0">
          <div className="flex flex-col md:flex-row gap-4 max-h-[80vh] h-[80vh] md:max-h-[85vh] md:h-[85vh]">
            <div className=" shadow-md  rounded-md px-2 space-y-4 py-2 m-2">
              <Card className="max-w-80 hidden md:block shadow-none border-0">
                <CardContent className="p-1 m-1">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      Filters
                    </CardTitle>
                  </CardHeader>

                  <PostFilters />
                </CardContent>
              </Card>

              <Card className="">
                <CardHeader className="p-3 md:p-4">
                  <CardTitle className="text-base flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="truncate">Trends</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-3 mx-2 pb-3 pt-0 space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs md:text-sm">
                      <span>Avg Price</span>
                      <span>$1,200</span>
                    </div>
                    <div className="h-1.5 md:h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[70%]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>


            <div className="flex-1 p-2 md:p-4 max-h-full overflow-y-auto">
              <div className="max-h-[95%] overflow-y-auto">
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                  {[...Array(6)].map((_, i) => (
                    <Card key={i} className="overflow-hidden">
                      <Skeleton className="h-40 md:h-48 w-full rounded-t-lg" />
                      <CardContent className="p-4 space-y-3">
                        <Skeleton className="h-5 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : isError ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <AlertTriangle className="h-10 w-10 text-red-500" />
                  <p className="text-lg font-medium">Error loading posts</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => queryClient.refetchQueries({ queryKey: ["get-all-posts", params] })}
                  >
                    Retry
                  </Button>
                </div>
              ) : !postsData || postsData.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <Home className="h-10 w-10 text-blue-500" />
                  <p className="text-lg font-medium">No rooms found</p>
                  <Button variant="outline" size="sm" onClick={() => router.push("/posts")}>
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid  lg:grid-cols-3 gap-4 lg:px-10">
                  {postsData.map((post) => (
                    <PostCard key={post.id} post={post} handleSave={handleSavePost} pending={isSaving} />
                  ))}
                </div>
              )}
              </div>
            </div>

           
          </div>
        </div>

      </div>
    </div>
  )
}

export default PostMainPage
