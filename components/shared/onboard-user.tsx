"use client"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Smartphone, User, Building2 } from "lucide-react"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const phoneSchema = z
  .string()
  .min(10, {
    message: "Phone number must be at least 10 digits",
  })
  .max(15, {
    message: "Phone number must not exceed 15 digits",
  })
  .refine((val) => /^[0-9+\-\s()]*$/.test(val), {
    message: "Please enter a valid phone number",
  })

interface OnboardingProps {
  isOpen: boolean,
  handleUpdate: (phoneNumber: string, role: "USER" | "OWNER") => void
}

export default function OnboardingPage({ isOpen, handleUpdate }: OnboardingProps) {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [role, setRole] = useState<"USER" | "OWNER">("USER")
  const [phoneError, setPhoneError] = useState<string | null>(null)
  const [roleError, setRoleError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPhoneNumber(value)
    setPhoneError(null)
  }

  const handleRoleChange = (value: "USER" | "OWNER") => {
    setRole(value)
    setRoleError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Reset errors
    setPhoneError(null)
    setRoleError(null)

    // Validate inputs
    let isValid = true

    try {
      phoneSchema.parse(phoneNumber)
    } catch (error) {
      if (error instanceof z.ZodError) {
        setPhoneError(error.errors[0].message)
        isValid = false
      }
    }

    if (!role) {
      setRoleError("Please select a role")
      isValid = false
    }

    if (!isValid) return

    try {
      setIsSubmitting(true)
      await handleUpdate(phoneNumber, role)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} >
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
        <div className="bg-gradient-to-b from-white to-gray-50">
          <div className="h-2 bg-gradient-to-r from-pink-500 to-orange-500"></div>
          <DialogHeader className="px-6 pt-6">
            <div className="flex justify-center mb-2">
              <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
            </div>
            <DialogTitle className="text-2xl font-bold text-center">Get Started</DialogTitle>
            <DialogDescription className="text-center">
              Complete your profile to start using RoomMate
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="px-6 py-4 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className={`pl-10 ${phoneError ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  disabled={isSubmitting}
                />
              </div>
              {phoneError && <p className="text-sm text-red-500">{phoneError}</p>}
            </div>

            <div className="space-y-3">
              <Label>I want to join as</Label>
              <RadioGroup
                value={role || ""}
                onValueChange={(value) => handleRoleChange(value as "USER" | "OWNER")}
                className="grid grid-cols-2 gap-4"
              >
                <div>
                  <RadioGroupItem value="USER" id="user" className="peer sr-only" disabled={isSubmitting} />
                  <Label
                    htmlFor="user"
                    className={`flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-gray-50 hover:border-gray-200 peer-data-[state=checked]:border-pink-500 [&:has([data-state=checked])]:border-pink-500 ${roleError ? "border-red-200" : ""}`}
                  >
                    <User className="mb-3 h-6 w-6 text-gray-600" />
                    <span className="text-sm font-medium">Tenant/User</span>
                  </Label>
                </div>

                <div>
                  <RadioGroupItem value="OWNER" id="owner" className="peer sr-only" disabled={isSubmitting} />
                  <Label
                    htmlFor="owner"
                    className={`flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-gray-50 hover:border-gray-200 peer-data-[state=checked]:border-pink-500 [&:has([data-state=checked])]:border-pink-500 ${roleError ? "border-red-200" : ""}`}
                  >
                    <Building2 className="mb-3 h-6 w-6 text-gray-600" />
                    <span className="text-sm font-medium">Owner/Manager</span>
                  </Label>
                </div>
              </RadioGroup>
              {roleError && <p className="text-sm text-red-500">{roleError}</p>}
            </div>

            <DialogFooter className="flex flex-col gap-2">
              <div className="space-y-4">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  <div className="flex items-center">
                    Continue
                    <CheckCircle2 className="ml-2 h-4 w-4" />
                  </div>
                )}
              </Button>

              <p className="text-center text-sm text-gray-500">
                By continuing, you agree to our{" "}
                <Link href="#" className="text-pink-600 hover:text-pink-700 font-medium">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-pink-600 hover:text-pink-700 font-medium">
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