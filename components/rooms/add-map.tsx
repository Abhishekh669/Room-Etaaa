"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { Search, MapPin, X, Navigation, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import dynamic from "next/dynamic"
import toast from "react-hot-toast"

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

// Debounce function to limit API calls
const debounce = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout
  return (...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

// Dynamically import the map component to avoid SSR issues
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

function AddMapPage({ onLocationSelect }: AddMapPageProps) {
  const [location, setLocation] = useState("")
  const [locationMarker, setLocationMarker] = useState<[number, number]>([0, 0])
  const [isSearchingLocation, setIsSearchingLocation] = useState(false)
  const [searchResults, setSearchResults] = useState<Place[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null)
  const [mapInitialized, setMapInitialized] = useState(false)

  const NOMINATIM_API = "https://nominatim.openstreetmap.org"

  // Handle search for locations
  const handleSearch = useCallback(
    async (query: string) => {
      if (!query || query.length < 3) {
        setSearchResults([])
        return
      }

      setIsLoading(true)
      try {
        let currentLocationQuery = ""
        if (locationMarker && locationMarker[0] !== 0 && locationMarker[1] !== 0) {
          currentLocationQuery = `&lat=${locationMarker[0]}&lon=${locationMarker[1]}&bounded=1&limit=15`
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

        // Sort results by relevance
        const queryWords = query
          .toLowerCase()
          .split(/\s+/)
          .filter((word) => word.length > 0)

        const sortedResults = data.sort((a: Place, b: Place) => {
          const aName = a.display_name.toLowerCase()
          const bName = b.display_name.toLowerCase()
          const aMatchCount = queryWords.filter((word) => aName.includes(word)).length
          const bMatchCount = queryWords.filter((word) => bName.includes(word)).length

          if (aMatchCount !== bMatchCount) return bMatchCount - aMatchCount
          if (locationMarker && locationMarker[0] !== 0) {
            const aDist = Number.parseFloat(a.distance || "0")
            const bDist = Number.parseFloat(b.distance || "0")
            return aDist - bDist
          }
          return aName.localeCompare(bName)
        })

        setSearchResults(sortedResults)
      } catch (error) {
        console.error("Search error:", error)
        toast.error("Failed to fetch search results")
        setSearchResults([])
      } finally {
        setIsLoading(false)
      }
    },
    [locationMarker],
  )

  // Create debounced search function
  const debouncedSearch = useMemo(() => debounce(handleSearch, 500), [handleSearch])

  // Handle selecting a place from search results
  const handlePlaceSelect = useCallback(
    (place: Place) => {
      setLocation(place.display_name)
      const position: [number, number] = [Number.parseFloat(place.lat), Number.parseFloat(place.lon)]
      setLocationMarker(position)
      setSelectedPlace(place)
      setSearchResults([])
      setIsSearchingLocation(false)

      // Notify parent component about location selection
      onLocationSelect?.(position, place.display_name)
    },
    [onLocationSelect],
  )

  // Handle marker drag on map
  const handleMarkerDrag = useCallback(
    async (position: [number, number]) => {
      setLocationMarker(position)

      try {
        const response = await fetch(`${NOMINATIM_API}/reverse?format=json&lat=${position[0]}&lon=${position[1]}`, {
          headers: {
            "Accept-Language": "en-US,en;q=0.9",
            "User-Agent": "LocationApp/1.0",
          },
        })

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

        const data = await response.json()
        const address = data.display_name || "Selected location"
        setLocation(address)
        setSelectedPlace({
          display_name: address,
          lat: position[0].toString(),
          lon: position[1].toString(),
        })

        // Notify parent component about location selection
        onLocationSelect?.(position, address)
      } catch (error) {
        console.error("Error getting address:", error)
        setLocation("Selected location")
      }
    },
    [onLocationSelect],
  )

  // Use current location
  const handleUseCurrentLocation = useCallback(() => {
    if ("geolocation" in navigator) {
      setIsLoading(true)
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords
          setLocationMarker([latitude, longitude])

          try {
            const response = await fetch(`${NOMINATIM_API}/reverse?format=json&lat=${latitude}&lon=${longitude}`, {
              headers: {
                "Accept-Language": "en-US,en;q=0.9",
                "User-Agent": "LocationApp/1.0",
              },
            })

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

            const data = await response.json()
            const address = data.display_name || "Your current location"
            setLocation(address)
            setSelectedPlace({
              display_name: address,
              lat: latitude.toString(),
              lon: longitude.toString(),
            })

            // Notify parent component about location selection
            onLocationSelect?.([latitude, longitude], address)
          } catch (error) {
            console.error("Error getting address:", error)
            setLocation("Your current location")
          } finally {
            setIsLoading(false)
          }
        },
        (error) => {
          let errorMessage = "Location access denied"
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = "Location permission denied"
              break
            case error.POSITION_UNAVAILABLE:
              errorMessage = "Location information unavailable"
              break
            case error.TIMEOUT:
              errorMessage = "Location request timed out"
              break
          }
          setLocation(errorMessage)
          setIsLoading(false)
          toast.error(errorMessage)
        },
      )
    } else {
      setLocation("Geolocation not supported")
      setIsLoading(false)
      toast.error("Geolocation is not supported by your browser")
    }
  }, [onLocationSelect])

  // Initialize with current location on component mount
  useEffect(() => {
    handleUseCurrentLocation()
  }, [handleUseCurrentLocation])

  // Handle map click
  const handleMapClick = useCallback(
    (position: [number, number]) => {
      handleMarkerDrag(position)
    },
    [handleMarkerDrag],
  )

  return (
    <div className="flex flex-col md:flex-row h-full">
      {/* Map container - on top for mobile, left side for desktop */}
      <div className="w-full md:w-2/3 h-[300px] md:h-full">
        <LocationMap
          markerPosition={locationMarker}
          onMarkerDrag={handleMarkerDrag}
          onMapClick={handleMapClick}
          onMapInitialized={() => setMapInitialized(true)}
        />
      </div>

      {/* Search panel - below for mobile, right side for desktop */}
      <div className="w-full md:w-1/3 p-4 bg-white border-t md:border-t-0 md:border-l">
        <div className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              placeholder="Search for a location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value)
                debouncedSearch(e.target.value)
                setIsSearchingLocation(true)
              }}
              className="pl-10 pr-10"
            />
            {location ? (
              <Button
                variant="ghost"
                size="icon"
                className="absolute inset-y-0 right-0 flex items-center"
                onClick={() => {
                  setLocation("")
                  setSelectedPlace(null)
                }}
              >
                <X className="h-5 w-5 text-gray-400" />
              </Button>
            ) : null}
          </div>

          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={handleUseCurrentLocation}
          >
            <Navigation className="h-4 w-4" />
            Use Current Location
          </Button>
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

        {selectedPlace && (
          <div className="mt-4">
            <Separator className="my-4" />
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Selected Location</h3>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-sm">{selectedPlace.display_name}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Lat: {Number.parseFloat(selectedPlace.lat).toFixed(6)}, Lon:{" "}
                    {Number.parseFloat(selectedPlace.lon).toFixed(6)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AddMapPage

