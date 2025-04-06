"use client"
import { getPosts } from "@/actions/posts/post"
import { PostCard } from "@/components/posts/post-card"
import { PostFilters } from "@/components/posts/post-filter"
import { AlertTriangle, Home, Loader2, MapPin, Star, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Posts } from "@/utils/types/type"
import { toast } from "react-hot-toast"
import { useEffect, useState } from "react"
import { useGetUserSession } from "@/hooks/tanstack/query-hooks/user/use-get-user-session"
import { useGetPosts } from "@/hooks/tanstack/query-hooks/saved-posts/use-get-posts"
import { useToggleSavePost } from "@/hooks/tanstack/mutate-hooks/posts/use-handle-save"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export interface SearchParams {
  location?: string
  minPrice?: string
  maxPrice?: string
  rooms?: string
  search?: string
}

export default  function PostPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const [mounted, setMounted] = useState(false)
  const params = searchParams;
  const router = useRouter()
  const {data : user} = useGetUserSession();
  const {data : posts, isLoading } = useGetPosts(params)
  const {mutate : toggleSavePost, isPending} = useToggleSavePost();
  useEffect(()=>{
    setMounted(true)
  },[])


  const handleSavePost = async (post: Posts) => {

    if (!post || !user?.user) {
      return;
    }


    toggleSavePost({
      postId: post.id,
      userId: user.user.id!,
    },{
      onSuccess  : (res)=>{
        if (res.message && res.success) {
          toast.success(res.message);
        } else if (res.error) {
          toast.error(res.error)
        } 
      },
      onError : () =>{
        toast.error("something went wrong")
      }
    })

    

  }
  
  if(!mounted)return null;

  if(isLoading){
    return <div className="w-full min-h-screen h-full flex jusitfy-center items-center">
      <Loader2 className="size-4 animate-spin" />
    </div>
  }

  

  return (
    <div className="p-4 md:p-8 min-h-screen w-full">
      <div className="mb-8 text-center md:text-left max-w-7xl mx-auto flex items-center justify-between">
        <div>
        <h1 className="text-3xl font-bold mb-2">Available Rooms</h1>
        <p className="text-muted-foreground">Find your perfect living space from our curated listings</p>
        </div>
        <div>
          <Button variant={"outline"} onClick={()=> router.push("/posts/saved")}>
            Saved Posts
          </Button>
        </div>
      </div>

      <div className="sticky top-0 bg-background/95 backdrop-blur-sm rounded-md z-40 shadow-sm mb-8 max-w-7xl mx-auto">
        <PostFilters />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        <div className="hidden lg:flex lg:w-64 flex-col gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Popular Locations</CardTitle>
              <CardDescription>Most searched areas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {["Downtown", "Westside", "University District", "Riverside"].map((location, index) => (
                <div key={index} className="flex items-center gap-2 group cursor-pointer">
                  <div className="w-2 h-2 rounded-full bg-primary/70 group-hover:bg-primary transition-colors"></div>
                  <div className="flex items-center gap-2 text-sm group-hover:text-primary transition-colors">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{location}</span>
                  </div>
                  <span className="ml-auto text-xs text-muted-foreground">{Math.floor(Math.random() * 20) + 5}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Market Trends</CardTitle>
              <CardDescription>Rental price insights</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Average Price</span>
                  <span className="text-sm font-medium">$1,250/mo</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[65%]"></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Vacancy Rate</span>
                  <span className="text-sm font-medium">12%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[12%]"></div>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <TrendingUp className="h-3.5 w-3.5 mr-1 text-emerald-500" />
                  <span>Prices up 3.2% from last month</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-3xl flex flex-col my-2 items-center gap-y-6">
            {!posts || posts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
                <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                  <AlertTriangle className="h-10 w-10 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xl font-medium">No rooms available</p>
                  <p className="text-muted-foreground mt-1">
                    Try adjusting your filters or check back later for new listings
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full grid grid-cols-1 gap-6">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} pending={isPending} handleSave={handleSavePost} />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:flex lg:w-72 flex-col gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Featured Property</CardTitle>
              <CardDescription>Premium listing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-40 w-full rounded-md overflow-hidden">
                <Image src="/placeholder.svg" alt="Featured property" fill className="object-cover" />
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                  Featured
                </div>
              </div>
              <div>
                <h3 className="font-medium">Luxury Downtown Apartment</h3>
                <p className="text-sm text-muted-foreground">Prime location with amazing views</p>
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-xs ml-2 text-muted-foreground">5.0 (24 reviews)</span>
                </div>
                <p className="text-primary font-semibold mt-2">$2,500/mo</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Recent Testimonials</CardTitle>
              <CardDescription>What our clients say</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Sarah J.", comment: "Found my dream apartment in just 3 days!" },
                { name: "Michael T.", comment: "The filtering system made it so easy to find exactly what I needed." },
              ].map((testimonial, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.comment}"</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Need Help?</CardTitle>
              <CardDescription>Contact our support team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Home className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Housing Support</p>
                  <p className="text-xs text-muted-foreground">Available 24/7</p>
                </div>
              </div>
              <button className="w-full bg-primary text-primary-foreground rounded-md py-2 text-sm font-medium">
                Contact Support
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

