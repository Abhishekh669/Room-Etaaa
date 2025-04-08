"use client"

import { useState } from "react"
import { format } from "date-fns"
import { CheckCircle2, Clock, Mail, Phone, ShieldAlert } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { XCircle } from "lucide-react"
import { OwnerRequestUser } from "@/utils/types/type"

interface UserRequestCardProps {
  request: OwnerRequestUser
  onAccept: (id: string, userId : string) => void
  onReject: (id: string, userId : string) => void
}

export function UserRequestCard({ request, onAccept, onReject }: UserRequestCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleAccept = async () => {
    setIsProcessing(true)

      await onAccept(request.id,request.userId)
  }

  const handleReject = async() => {
    setIsProcessing(true)
     await  onReject(request.id, request.userId)
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border transition-all duration-300",
        isHovered ? "scale-[1.02]" : "scale-100",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 opacity-10 transition-opacity duration-300",
          isHovered ? "opacity-20" : "opacity-10",
        )}
      />

      <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-white p-[1px]">
        <div
          className={cn(
            "absolute inset-0 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 opacity-0 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0",
          )}
        />
      </div>

      <div className="relative z-10 p-6 bg-white rounded-xl">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16 border-2 border-white shadow-md">
              <AvatarImage src={request.user.image || ""} alt={request.user.name || ""} />
              <AvatarFallback className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700">
                {request.user.name?.charAt(0).toUpperCase() || "U" }
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">{request.user.name}</h3>
              <div className="flex items-center space-x-1 mt-1">
                <ShieldAlert className="h-5 w-5 text-amber-500" />
                <span className="text-sm font-medium">Requesting Owner Role</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <Clock className="h-3 w-3" />
            <span>{format(new Date(request.createdAt), "MMM d, yyyy")}</span>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <div className="flex items-center space-x-2 text-sm">
            <Mail className="h-4 w-4 text-gray-400" />
            <span>{request.user.email}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Phone className="h-4 w-4 text-gray-400" />
            <span>{request.user.phoneNumber}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <div className={cn("h-2 w-2 rounded-full", request.user.isOnboarded ? "bg-emerald-500" : "bg-amber-500")} />
            <span>{request.user.isOnboarded ? "Onboarded" : "Not Onboarded"}</span>
          </div>
        </div>

        <div className="flex space-x-3">
          <Button
            onClick={handleAccept}
            disabled={isProcessing}
            className={cn(
              "flex-1 transition-all duration-300 border",
              "bg-white hover:bg-green-50 text-green-600 border-green-200",
              "hover:border-green-300 hover:shadow-sm hover:shadow-green-100",
              isHovered ? "translate-y-0" : "translate-y-0",
            )}
          >
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Accept
          </Button>
          <Button
            onClick={handleReject}
            disabled={isProcessing}
            className={cn(
              "flex-1 transition-all duration-300 border",
              "bg-white hover:bg-red-50 text-red-600 border-red-200",
              "hover:border-red-300 hover:shadow-sm hover:shadow-red-100",
              isHovered ? "translate-y-0" : "translate-y-0",
            )}
          >
            <XCircle className="mr-2 h-4 w-4" />
            Reject
          </Button>
        </div>
      </div>
    </div>
  )
}
