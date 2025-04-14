"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from "@/components/ui/button"
import { useLocationStore } from "@/features/store/location/use-location-store"
import dynamic from "next/dynamic"
import { X } from "lucide-react"
import { toast } from 'sonner'

const AddMapPage = dynamic(() => import("@/components/location/map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50 rounded-lg">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <p className="mt-2 text-sm text-muted-foreground">Loading map...</p>
      </div>
    </div>
  ),
})

function ShowMapPage({ showMap, onClose }: { showMap: boolean, onClose: () => void }) {
  const { location, position, resetAllData } = useLocationStore()

  const handleSubmit = () => {
    if(location && position){
      onClose();
    }
    else{
      toast.error("Please select a location and position")
    }

  }

  const handleClose = () => {
    resetAllData()
    onClose()
  }

  return (
    <Dialog open={showMap} onOpenChange={handleClose}>
      <DialogContent className="w-full max-w-[95vw] h-[95vh] sm:max-w-[90vw] sm:max-h-[90vh] lg:max-w-[1200px] lg:max-h-[800px] p-0 overflow-hidden">
        <DialogHeader className="px-4 py-2 border-b">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-semibold">
              <div className="flex items-center mochiy-pop-one-regular">
                <span className="text-lg  text-gray-800 ">
                  Select&nbsp;
                </span>
                <span className="text-lg  text-red-600">
                  Location
                </span>
              </div>
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="flex flex-col h-full">
          <div className="px-4 py-2 flex justify-evenly border-b">
          <Button
              onClick={handleClose}
              className="w-full sm:w-auto bg-red-500 text-white hover:bg-red-500/50 hover:text-white "
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!position || !location}
              className="w-full sm:w-auto bg-red-500 text-white hover:bg-red-500/50 hover:text-white "
            >
              Confirm Location
            </Button>

            
          </div>

          <div className="flex-1 min-h-[300px] md:min-h-[400px] lg:min-h-[600px] relative">
            <AddMapPage />
          </div>

          {(position && location) && (
            <div className="px-4 py-2 border-t bg-gray-50">
              <div className="flex items-start">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">{location}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Coordinates: {position[0].toFixed(6)}, {position[1].toFixed(6)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ShowMapPage