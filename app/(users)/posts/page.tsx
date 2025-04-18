"use client"
import { getAllPosts } from '@/features/actions/posts/posts';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { AlertTriangle, Home, MapPin, Star, TrendingUp, Users, Heart, Loader2, Menu } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PostFilters } from '@/components/posts/post-filter';
import { PostCard } from '@/components/posts/post-card';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import AddButton from '@/components/shared/add-button';
import { toggleSavePost } from '@/features/actions/saved-posts/saved-post';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { PostFiltersForMobile } from '@/components/posts/post-mobile-view-filter';

function PostMainPage() {
  const queryClient = useQueryClient()
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const params = {
    location: searchParams.get('location') || undefined,
    minPrice: searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined,
    maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
    numberOfRooms: searchParams.get('numberOfRooms') ? Number(searchParams.get('numberOfRooms')) : undefined,
    title: searchParams.get('title') || undefined,
    topSearch: searchParams.get('topSearch') === 'true'
  };

  const { data: postsData, isLoading, isError } = useQuery({
    queryKey: ["get-all-posts", params],
    queryFn: () => getAllPosts(params),
    select: (data) => {
      if ('error' in data) return [];
      return data;
    }
  });

  const { mutate: savePost, isPending: isSaving } = useMutation({
    mutationFn: toggleSavePost,
    onSuccess: (res) => {
      if (res.success) {
        queryClient.invalidateQueries({ queryKey: ["get-all-posts", params] })
      }
    },
  })

  const handleSavePost = async (postId: string, userId: string) => {
    if (!userId || !postId) return;
    savePost({ postId, userId }, {
      onSuccess: (res) => {
        if (res.message && res.success) {
          toast.success(res.message);
        } else if (res.error) {
          toast.error(res.error)
        }
      },
      onError: () => {
        toast.error("Something went wrong while saving the post")
      }
    })
  }

  return (
    <div className="  max-h-screen overflow-y-hidden w-full bg-gray-50">
       <PostFiltersForMobile  open={open} onClose={() => setOpen(false)}/>
      <div className=" w-full px-4 py-2  mx-auto  shadow-md rounded-md mx-1 z-990">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Available <span className="text-red-600">Rooms</span>
            </h1>
            <p className="text-muted-foreground mt-1">
              Find your perfect living space from our curated listings
            </p>
          </div>
          <div className='w-full flex items-center justify-between  gap-2'>
            <AddButton location='/posts/saved' title='Saved Posts' />
            <div className='md:hidden   '>
              <Button variant='outline' className='md:hidden' onClick={() => setOpen(true)}>
                <Menu className='h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky hidden md:block top-2 bg-background/95   backdrop-blur-sm z-40  max-w-7xl mx-auto">
            <PostFilters />
      </div>

      {/* Main Content */}
      <div className='mx-1 my-4 rounded-md bg-white shadow-md py-2'>
      <div className="flex flex-col lg:flex-row gap-8 max-h-[80vh] h-[80vh]  mx-auto">
        <div className="hidden lg:flex lg:w-64 flex-col gap-6 sticky top-[calc(64px+1rem)] h-[calc(100vh-64px-1rem)] overflow-y-auto">
          <Card className="shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Popular Locations
              </CardTitle>
              <CardDescription>Most searched areas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {["Downtown", "Westside", "University District", "Riverside"].map((location, index) => (
                <div key={index} className="flex items-center gap-3 group cursor-pointer p-2 rounded-md hover:bg-accent transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary/70 group-hover:bg-primary transition-colors"></div>
                  <span className="text-sm">{location}</span>
                  <span className="ml-auto text-xs text-muted-foreground bg-accent px-2 py-1 rounded-full">
                    {Math.floor(Math.random() * 20) + 5}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Market Trends
              </CardTitle>
              <CardDescription>Rental price insights</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Average Price</span>
                  <span className="text-sm font-medium">$1,250/mo</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[65%]"></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Vacancy Rate</span>
                  <span className="text-sm font-medium">12%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[12%]"></div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-sm text-emerald-600">
                <TrendingUp className="h-4 w-4" />
                <span>Prices up 3.2% from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1 px-2 py-2 max-h-full overflow-y-auto ">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="h-48 w-full rounded-t-lg" />
                  <CardContent className="p-4 space-y-3">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <div className="flex gap-2">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                    <Skeleton className="h-10 w-full mt-4" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : isError ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
              <div className="h-20 w-20 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangle className="h-10 w-10 text-red-500" />
              </div>
              <div>
                <p className="text-xl font-medium">Error loading posts</p>
                <p className="text-muted-foreground mt-1">
                  Please try again later or refresh the page
                </p>
              </div>
              <Button variant="outline" onClick={() => queryClient.refetchQueries({ queryKey: ["get-all-posts", params] })}>
                Retry
              </Button>
            </div>
          ) : !postsData || postsData.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
              <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
                <Home className="h-10 w-10 text-blue-500" />
              </div>
              <div>
                <p className="text-xl font-medium">No rooms available</p>
                <p className="text-muted-foreground mt-1">
                  Try adjusting your filters or check back later for new listings
                </p>
              </div>
              <Button variant="outline" onClick={() => router.push('/posts')}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1  gap-6 ">
              {postsData.map((post) => (
                <PostCard key={post.id} post={post} handleSave={handleSavePost} pending={isSaving}/>
              ))}
            </div>
          )}
        </div>

        {/* Right Sidebar - Fixed position */}
        <div className="hidden lg:flex lg:w-72  flex-col gap-6 sticky top-[calc(64px+1rem)] h-[calc(100vh-64px-1rem)] overflow-y-auto">
          <Card className="shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Featured Property
              </CardTitle>
              <CardDescription>Premium listing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-48 w-full rounded-lg overflow-hidden border">
                <Image
                  src="/placeholder.svg"
                  alt="Featured property"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-3 w-3 fill-current" />
                  Featured
                </div>
              </div>
              <div>
                <h3 className="font-medium">Luxury Downtown Apartment</h3>
                <p className="text-sm text-muted-foreground mt-1">Prime location with amazing views</p>
                <div className="flex items-center mt-2 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs ml-1 text-muted-foreground">(24 reviews)</span>
                </div>
                <p className="text-primary font-semibold mt-2 text-lg">$2,500/mo</p>
                <Button size="sm" className="w-full mt-3">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Testimonials
              </CardTitle>
              <CardDescription>What our clients say</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  name: "Sarah J.",
                  comment: "Found my dream apartment in just 3 days!",
                  rating: 5
                },
                {
                  name: "Michael T.",
                  comment: "The filtering system made it so easy to find exactly what I needed.",
                  rating: 4
                },
              ].map((testimonial, index) => (
                <div key={index} className="space-y-3 p-3 bg-accent/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">"{testimonial.comment}"</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Home className="h-5 w-5 text-primary" />
                Need Help?
              </CardTitle>
              <CardDescription>Contact our support team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-accent/50 rounded-lg">
                <p className="text-sm mb-3">Our team is available 24/7 to assist you with:</p>
                <ul className="text-sm space-y-2 text-muted-foreground list-disc pl-5">
                  <li>Finding the right property</li>
                  <li>Booking viewings</li>
                  <li>Rental agreements</li>
                </ul>
              </div>
              <Button className="w-full">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </div>
  )
}

export default PostMainPage