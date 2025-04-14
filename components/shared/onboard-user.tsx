"use client"
import { useState } from "react"
import Link from "next/link"
import { CheckCircle2, Smartphone, User, Building2 } from "lucide-react"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import SpinningLoader from "./SpinningLoader"

const phoneSchema = z
  .string()
  .min(10, { message: "Phone number must be at least 10 digits" })
  .max(15, { message: "Phone number must not exceed 15 digits" })
  .refine((val) => /^[0-9+\-\s()]*$/.test(val), {
    message: "Please enter a valid phone number",
  })

interface OnboardingProps {
  isOpen: boolean
  handleUpdate: (phoneNumber: string, role: "USER" | "OWNER") => void
}

export default function OnboardingPage({ isOpen, handleUpdate }: OnboardingProps) {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [role, setRole] = useState<"USER" | "OWNER">("USER")
  const [phoneError, setPhoneError] = useState<string | null>(null)
  const [roleError, setRoleError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value)
    setPhoneError(null)
  }

  const handleRoleChange = (value: "USER" | "OWNER") => {
    setRole(value)
    setRoleError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setPhoneError(null)
    setRoleError(null)

    try {
      phoneSchema.parse(phoneNumber)
    } catch (error) {
      if (error instanceof z.ZodError) {
        setPhoneError(error.errors[0].message)
        return
      }
    }

    if (!role) {
      setRoleError("Please select a role")
      return
    }

    try {
      setIsSubmitting(true)
      await handleUpdate(phoneNumber, role)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden border-2 border-black">
        <div className="bg-white">
          <div className="h-2 bg-red-600"></div>
          <DialogHeader className="px-6 pt-6">
            <div className="flex justify-center mb-2">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
            </div>
            <DialogTitle className="text-2xl font-bold text-center text-black">
              Get Started
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600">
              Complete your profile to start using RoomMate
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="px-6 py-4 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-black">
                Phone Number
              </Label>
              <div className="relative">
                <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className={`pl-10 ${phoneError ? "border-red-600 focus-visible:ring-red-600" : "border-gray-300"}`}
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  disabled={isSubmitting}
                />
              </div>
              {phoneError && <p className="text-sm text-red-600">{phoneError}</p>}
            </div>

            <div className="space-y-3">
              <Label className="text-black">I want to join as</Label>
              <RadioGroup
                value={role}
                onValueChange={handleRoleChange}
                className="grid grid-cols-2 gap-4"
              >
                <div>
                  <RadioGroupItem value="USER" id="user" className="peer sr-only" disabled={isSubmitting} />
                  <Label
                    htmlFor="user"
                    className={`flex flex-col items-center justify-between rounded-md border-2 bg-transparent p-4 hover:bg-gray-50 ${
                      role === "USER" 
                        ? "border-red-600 bg-red-50" 
                        : "border-gray-300"
                    } ${
                      roleError ? "border-red-600" : ""
                    }`}
                  >
                    <User className="mb-3 h-6 w-6 text-gray-700" />
                    <span className="text-sm font-medium text-black">Tenant/User</span>
                  </Label>
                </div>

                <div>
                  <RadioGroupItem value="OWNER" id="owner" className="peer sr-only" disabled={isSubmitting} />
                  <Label
                    htmlFor="owner"
                    className={`flex flex-col items-center justify-between rounded-md border-2 bg-transparent p-4 hover:bg-gray-50 ${
                      role === "OWNER" 
                        ? "border-red-600 bg-red-50" 
                        : "border-gray-300"
                    } ${
                      roleError ? "border-red-600" : ""
                    }`}
                  >
                    <Building2 className="mb-3 h-6 w-6 text-gray-700" />
                    <span className="text-sm font-medium text-black">Owner/Manager</span>
                  </Label>
                </div>
              </RadioGroup>
              {roleError && <p className="text-sm text-red-600">{roleError}</p>}
            </div>

            <DialogFooter className="flex flex-col gap-2">
              <div className="space-y-4">
                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <SpinningLoader  />
                      Processing...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Continue
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                  )}
                </Button>

                <p className="text-center text-sm text-gray-600">
                  By continuing, you agree to our{" "}
                  <Link href="#" className="text-red-600 hover:text-red-700 font-medium">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-red-600 hover:text-red-700 font-medium">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}