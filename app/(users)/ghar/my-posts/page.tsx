"use client"

import { useState } from "react"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, ArrowUpDown, Search } from "lucide-react"
import { PostCard } from "@/components/my-posts/my-post-card"
import { Room } from "@/generated/prisma"
import { deleteMyPost, getMyPosts } from "@/features/actions/my-posts/my-posts"
import HeaderPage from "@/components/shared/Header"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "sonner"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"



const MyPostsPage = () => {
  const queryClient = useQueryClient()
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getMyPosts(),
  })

  const { mutate: deletePost, isPending: isDeleting } = useMutation({
    mutationFn: deleteMyPost,
    onSuccess: (res) => {
      if (res.success) {
        queryClient.invalidateQueries({ queryKey: ["posts"] })
      }
    },
    onError: (error) => {
      console.log(error)
    }
  })

  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("ALL")
  const [sortBy, setSortBy] = useState("NEWEST")

  const filteredPosts = data?.posts?.filter((post) => {
    const searchRegex = new RegExp(searchQuery, "i")
    const roomNumberMatch = searchRegex.test(post.room.roomNumber.toString())
    const statusMatch = statusFilter === "ALL" || post.room.roomStatus === statusFilter
    return roomNumberMatch && statusMatch
  }) || []

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === "NEWEST") {
      return b.createdAt.getTime() - a.createdAt.getTime()
    }
    if (sortBy === "OLDEST") {
      return a.createdAt.getTime() - b.createdAt.getTime()
    }
    if (sortBy === "ROOM_NUMBER") {
      return a.room.roomNumber.toString().localeCompare(b.room.roomNumber.toString())
    }
    return 0
  })

  const handleDeletePost = (postId: string) => {
    if (isDeleting) {
      toast.loading("Deleting post...")
      return;
    }

    deletePost(postId, {
      onSuccess: (res) => {
        if (res.success) {
          toast.success(res.message)
        }
      },
      onError: (error) => {
        toast.error(error.message)
      }
    })
  }

  return (
    <div className=" bg-gradient-to-br from-gray-50 to-gray-100 ">
      <HeaderPage title1="My" title2="Posts" />

      <div className=" mx-auto  px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col  lg:flex-row gap-6">
          <div className="lg:w-72 xl:w-80 space-y-6 px-4 py-4 md:px-3 md:py-4 lg:mx-0 lg:my-0">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-24 h-fit">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Filter className="h-5 w-5 text-red-600" />
                Filters & Sorting
              </h3>

              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Search Posts</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search by room number..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Filter by Status</label>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full shadow-sm">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ALL">All Status</SelectItem>
                      <SelectItem value="VACANT" className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                        Vacant
                      </SelectItem>
                      <SelectItem value="OCCUPIED" className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-red-500"></span>
                        Occupied
                      </SelectItem>
                      <SelectItem value="MAINTENANCE" className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                        Maintenance
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 ">
                  <label className="text-sm font-medium text-gray-700">Sort By</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full shadow-sm">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="NEWEST">Newest First</SelectItem>
                      <SelectItem value="OLDEST">Oldest First</SelectItem>
                      <SelectItem value="ROOM_NUMBER">Room Number</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full  flex-1  lg:flex lg:justify-center">
          <div >
            <div className="bg-white  border border-gray-200 shadow-sm p-4 rounded-md ">
              <div className="flex  items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900 new-font">
                  Your <span className="text-red-600">Posts</span>
                </h2>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {sortedPosts.length} {sortedPosts.length === 1 ? "Post" : "Posts"}
                </span>
              </div>
            </div>

            <div className="py-4 bg-white mt-6 lg:max-w-[800px] rounded-md shadow-sm">
              <div className=" bg-white max-h-[750px]  h-[750px] overflow-y-auto px-4 py-4 md:px-16 md:py-4  lg:px-20 lg:py-6">
                {isLoading ? (
                  <div className="space-y-6  ">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="lg:w-[500px] lg:h-[600px] bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-start space-x-4">
                          <Skeleton className="h-12 w-12 rounded-full bg-gray-200" />
                          <div className="flex-1 space-y-3">
                            <Skeleton className="h-4 w-3/4 bg-gray-200" />
                            <Skeleton className="h-4 w-1/2 bg-gray-200" />
                            <Skeleton className="h-32 w-full bg-gray-200" />
                          </div>

                          <div className="flex items-center gap-x-2">
                            <Skeleton className="h-4 w-1/2 bg-gray-200" />
                            <Skeleton className="h-4 w-1/2 bg-gray-200" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : error ? (
                  <div className="bg-white p-6 rounded-xl border border-red-200 shadow-sm text-center">
                    <p className="text-red-600 font-medium">Error loading posts</p>
                    <p className="text-sm text-gray-500 mt-2">Please try again later</p>
                  </div>
                ) : sortedPosts.length > 0 ? (
                  <div className="flex flex-col gap-y-6 lg:gap-x-4 lg:gap-y-10 justify-center lg:items-center ">
                    {sortedPosts.map((post) => (
                      <div
                        key={post.id}
                        className=" rounded-xl border border-gray-200 shadow-sm transition-all hover:shadow-md hover:border-blue-200 lg:w-[500px] lg:h-[600px] "
                      >
                        <PostCard post={post} onDelete={handleDeletePost} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-96 bg-white rounded-xl border-2 border-dashed border-gray-300 p-6 text-center">
                    <div className="bg-blue-50 p-4 rounded-full mb-4">
                      <Filter className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">No posts found</h3>
                    <p className="text-gray-500 max-w-md">
                      {searchQuery || statusFilter !== "ALL"
                        ? "Try adjusting your search or filter criteria"
                        : "You haven't created any posts yet"}
                    </p>
                    {!(searchQuery || statusFilter !== "ALL") && (
                      <Link href="/ghar/rooms/add-room"
                        onMouseEnter={() => router.prefetch("/ghar/rooms/add-room")}
                      >
                        <Button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-400 cursor-pointer transition-colors">
                          Create Your First Post
                        </Button>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          </div>
          <div className="p-2 hidden lg:flex lg:flex-col" >
            <div>SomeThing will come here</div>
            <div>SomeThing will come here</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPostsPage