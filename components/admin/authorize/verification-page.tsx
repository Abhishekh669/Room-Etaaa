"use client"

import { UserRequestCard } from "./user-request-card"
import { useGetAllUserRequest } from "@/hooks/tanstack/query-hooks/admin/use-get-all-user-request"
import { Loader2 } from "lucide-react"
import toast from "react-hot-toast";
import { useAccetpOwnerRequest } from "@/hooks/tanstack/mutate-hooks/admin/use-accept-owner-reqeust";
import { useRejectOwnerRequest } from "@/hooks/tanstack/mutate-hooks/admin/use-reject-owner-request";

export function VerificationRequests() {
const {data : requests, isLoading, } = useGetAllUserRequest();
const {mutate : acceptOwnerRequest, isPending : accepting} = useAccetpOwnerRequest();
const {mutate : rejectingOwnerRequest, isPending : rejecting} = useRejectOwnerRequest();

  const handleAccept = async(id: string, userId : string) => {
    if(!id || !userId){
      return;
    }
    acceptOwnerRequest({
      id, userId
    },{
       onSuccess : (response) =>{
        if(response.message && response.success){
          toast.success(response.message)
        } else if(response.error){
          toast.error(response.error)
        }
       },
       onError : (error) =>{
        toast.error(error.message || "something went wrong")
       }
    })
  }

  const handleReject = async (id: string, userId : string) => {

    if(!id || !userId){
      return;
    }
    rejectingOwnerRequest({
      id, userId
    },{
       onSuccess : (response) =>{
        if(response.message && response.success){
          toast.success(response.message)
        } else if(response.error){
          toast.error(response.error)
        }
       },
       onError : (error) =>{
        toast.error(error.message || "something went wrong")
       }
    })
  }
  if(isLoading){
    return <div className="w-full min-h-screen flex justify-center items-center"><Loader2 className="animate-spin size-10"/></div>
  }
  if(requests && "error" in requests){
    return <div className="w-full min-h-screen flex justify-center items-center">Something went wrong</div>

  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {requests && requests.length > 0 && requests.map((request) => (
          <UserRequestCard key={request.id} request={request} onAccept={handleAccept} onReject={handleReject} />
        ))}
      </div>

      {requests && requests.length === 0 && (
        <div className="flex flex-col items-center justify-center h-60 bg-white ">
          <p className="text-muted-foreground">No verification requests found</p>
        </div>
      )}
    </div>
  )
}
