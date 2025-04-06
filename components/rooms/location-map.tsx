"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation } from "lucide-react"

interface LocationMapProps {
  markerPosition?: [number, number]
  onMarkerDrag?: (position: [number, number]) => void
  onMapClick?: (position: [number, number]) => void
  onMapInitialized?: () => void
  zoom?: number
}

const mapStyles = {
  default: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  satellite: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
}

const defaultCenter: [number, number] = [27.7172, 85.324] // Default center if no position provided
const defaultZoom = 13

const LocationMap = ({
  markerPosition,
  onMarkerDrag,
  onMapClick,
  onMapInitialized,
  zoom = defaultZoom,
}: LocationMapProps) => {
  const mapRef = useRef<L.Map | null>(null)
  const markerRef = useRef<L.Marker | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [L, setL] = useState<typeof import("leaflet") | null>(null)
  const [mapStyle, setMapStyle] = useState<keyof typeof mapStyles>("default")
  const [isMapInitialized, setIsMapInitialized] = useState(false)

  // Create custom marker icon
  const icon = useMemo(() => {
    if (!L) return null

    return L.divIcon({
      html: `
        <div style="position: relative; width: 36px; height: 36px;">
          <svg viewBox="0 0 24 24" width="36" height="36" fill="#3b82f6" stroke="white" strokeWidth="1.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" fill="white" />
          </svg>
        </div>
      `,
      iconSize: [36, 36],
      iconAnchor: [18, 36],
      className: "custom-marker-icon",
    })
  }, [L])

  useEffect(() => {
    if (typeof window === "undefined") return;

    Promise.all([
      import("leaflet"),
    ]).then(([leaflet]) => {
      setL(leaflet);
    });
  }, []);

  // Initialize map
  useEffect(() => {
    if (!L || !containerRef.current || mapRef.current) return

    const map = L.map(containerRef.current).setView(
      markerPosition && markerPosition[0] !== 0 ? markerPosition : defaultCenter,
      zoom,
    )
    mapRef.current = map

    L.tileLayer(mapStyles[mapStyle]).addTo(map)

    L.control.zoom({ position: "topright" }).addTo(map)
    L.control.attribution({ position: "bottomright" }).addTo(map)

    // Add map style control
    const styleControl = L.Control.extend({
      options: { position: "topright" },
      onAdd: () => {
        const container = L.DomUtil.create("div", "leaflet-bar leaflet-control")
        const select = L.DomUtil.create("select", "bg-white text-gray-800 rounded-md px-2 py-1 text-sm", container)

        Object.keys(mapStyles).forEach((style) => {
          const option = L.DomUtil.create("option", "", select)
          option.value = style
          option.textContent = style.charAt(0).toUpperCase() + style.slice(1)
        })

        select.addEventListener("change", (e) => {
          const target = e.target as HTMLSelectElement
          setMapStyle(target.value as keyof typeof mapStyles)
        })

        return container
      },
    })
    map.addControl(new styleControl())

    // Add click handler
    if (onMapClick) {
      map.on("click", (e: L.LeafletMouseEvent) => {
        const position: [number, number] = [e.latlng.lat, e.latlng.lng]
        onMapClick(position)
      })
    }

    setIsMapInitialized(true)
    onMapInitialized?.()

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [L, zoom, mapStyle, onMapClick, onMapInitialized, markerPosition])

  // Update map style when it changes
  useEffect(() => {
    if (!mapRef.current || !L || !isMapInitialized) return

    // Remove existing tile layers
    mapRef.current.eachLayer((layer) => {
      if (layer instanceof L.TileLayer) {
        mapRef.current?.removeLayer(layer)
      }
    })

    // Add new tile layer
    L.tileLayer(mapStyles[mapStyle]).addTo(mapRef.current)
  }, [mapStyle, L, isMapInitialized])

  // Update marker when position changes
  useEffect(() => {
    if (!mapRef.current || !isMapInitialized || !L || !icon) return

    const map = mapRef.current

    if (markerPosition && markerPosition[0] !== 0 && markerPosition[1] !== 0) {
      if (markerRef.current) {
        markerRef.current.setLatLng(markerPosition)
      } else {
        markerRef.current = L.marker(markerPosition, {
          icon: icon,
          draggable: !!onMarkerDrag,
        }).addTo(map)

        if (onMarkerDrag) {
          markerRef.current.on("dragend", (e) => {
            const position = e.target.getLatLng()
            const newPosition: [number, number] = [position.lat, position.lng]
            onMarkerDrag(newPosition)
          })
        }
      }

      // Center map on marker
      map.setView(markerPosition, map.getZoom())
    } else if (markerRef.current) {
      markerRef.current.remove()
      markerRef.current = null
    }
  }, [L, markerPosition, isMapInitialized, icon, onMarkerDrag])

  // Center map on marker button handler
  const handleCenterOnMarker = () => {
    if (!mapRef.current || !markerPosition || markerPosition[0] === 0) return
    mapRef.current.setView(markerPosition, 15)
  }

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="w-full h-full" />

      {/* Map controls */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        {markerPosition && markerPosition[0] !== 0 && (
          <Button
            onClick={handleCenterOnMarker}
            size="icon"
            className="bg-white text-primary hover:bg-gray-100 shadow-md"
          >
            <MapPin className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Instructions */}
      <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-lg shadow-md max-w-xs">
        <h3 className="font-medium text-sm mb-1">Instructions:</h3>
        <ul className="text-xs text-gray-600 space-y-1">
          <li className="flex items-center gap-1">
            <MapPin className="h-3 w-3" /> Click on map to set location
          </li>
          <li className="flex items-center gap-1">
            <Navigation className="h-3 w-3" /> Drag marker to adjust position
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LocationMap

