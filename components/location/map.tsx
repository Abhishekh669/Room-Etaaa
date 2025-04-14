"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { Search, MapPin, X, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import dynamic from "next/dynamic"
import { toast } from "sonner"
import { useLocationStore } from "@/features/store/location/use-location-store"

// Define the Place interface for search results
interface Place {
  display_name: string
  lat: string
  lon: string
  distance?: string
}

interface AddMapPageProps {
  onLocationSelect?: (position: [number, number], address: string) => void
}

const NOMINATIM_API = "https://nominatim.openstreetmap.org"

const LocationMap = dynamic(() => import("./location-map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
      <div className="flex flex-col items-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="mt-2 text-sm text-muted-foreground">Loading map...</p>
      </div>
    </div>
  ),
})

const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

function AddMapPage({ onLocationSelect }: AddMapPageProps) {
  const { location, position, setLocation, setPosition } = useLocationStore()
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchingLocation, setIsSearchingLocation] = useState(false)
  const [searchResults, setSearchResults] = useState<Place[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const searchTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  const getAddressFromCoordinates = useCallback(async (lat: number, lon: number) => {
    try {
      const response = await fetch(`${NOMINATIM_API}/reverse?format=json&lat=${lat}&lon=${lon}`, {
        headers: {
          "Accept-Language": "en-US,en;q=0.9",
          "User-Agent": "LocationApp/1.0",
        },
      })

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

      const data = await response.json()
      return data.display_name || "Selected location"
    } catch (error) {
      console.error("Error getting address:", error)
      return "Selected location"
    }
  }, [])

  const handleSearch = useCallback(
    async (query: string) => {
      if (!query || query.length < 3) {
        setSearchResults([])
        return
      }

      setIsLoading(true)
      try {
        let currentLocationQuery = ""
        if (position && position[0] !== 0 && position[1] !== 0) {
          currentLocationQuery = `&lat=${position[0]}&lon=${position[1]}&bounded=1&limit=15`
        }

        const response = await fetch(
          `${NOMINATIM_API}/search?format=json&q=${encodeURIComponent(query)}${currentLocationQuery}`,
          {
            headers: {
              "Accept-Language": "en-US,en;q=0.9",
              "User-Agent": "LocationApp/1.0",
            },
          },
        )

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

        const data = await response.json()
        setSearchResults(data)
      } catch (error) {
        console.error("Search error:", error)
        toast.error("Failed to fetch search results")
        setSearchResults([])
      } finally {
        setIsLoading(false)
      }
    },
    [position],
  )

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      handleSearch(query)
    }, 500),
    [handleSearch]
  )

  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchQuery(value)
      setIsSearchingLocation(true)
      debouncedSearch(value)
    },
    [debouncedSearch]
  )

  const handlePlaceSelect = useCallback(
    (place: Place) => {
      setLocation(place.display_name)
      const newPosition: [number, number] = [Number.parseFloat(place.lat), Number.parseFloat(place.lon)]
      setPosition(newPosition)
      setSearchResults([])
      setIsSearchingLocation(false)
      setSearchQuery("")

      onLocationSelect?.(newPosition, place.display_name)
    },
    [onLocationSelect, setLocation, setPosition],
  )

  const handleMarkerDrag = useCallback(
    async (newPosition: [number, number]) => {
      setPosition(newPosition)
      const address = await getAddressFromCoordinates(newPosition[0], newPosition[1])
      setLocation(address)
      onLocationSelect?.(newPosition, address)
    },
    [onLocationSelect, setLocation, setPosition, getAddressFromCoordinates],
  )

  const handleMapClick = useCallback(
    async (newPosition: [number, number]) => {
      setPosition(newPosition)
      const address = await getAddressFromCoordinates(newPosition[0], newPosition[1])
      setLocation(address)
      onLocationSelect?.(newPosition, address)
    },
    [onLocationSelect, setLocation, setPosition, getAddressFromCoordinates],
  )

  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="flex flex-col lg:flex-row h-full">
      <div className="w-full lg:w-2/3 h-[400px] lg:h-full relative">
        <div className="absolute inset-0">
          <LocationMap
            markerPosition={position}
            onMarkerDrag={handleMarkerDrag}
            onMapClick={handleMapClick}
          />
        </div>
      </div>

      <div className="w-full lg:w-1/3 p-4 bg-white border-t lg:border-t-0 lg:border-l overflow-y-auto">
        <div className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              placeholder="Search for a location"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 pr-10"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute inset-y-0 right-0 flex items-center"
                onClick={() => {
                  setSearchQuery("")
                  setSearchResults([])
                }}
              >
                <X className="h-5 w-5 text-gray-400" />
              </Button>
            )}
          </div>

          {isLoading && (
            <div className="flex justify-center py-4">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
            </div>
          )}

          {searchResults.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Search Results</h3>
              <div className="space-y-2 max-h-[200px] overflow-auto">
                {searchResults.map((place) => (
                  <div
                    key={`${place.lat}-${place.lon}`}
                    className="flex items-start p-2 rounded-md hover:bg-muted cursor-pointer"
                    onClick={() => handlePlaceSelect(place)}
                  >
                    <MapPin className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-sm">{place.display_name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {location && (
            <div className="mt-4">
              <Separator className="my-4" />
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Selected Location</h3>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm">{location}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Lat: {position[0].toFixed(6)}, Lon: {position[1].toFixed(6)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AddMapPage

