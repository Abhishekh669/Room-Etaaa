"use client"

import dynamic from "next/dynamic";
import { useLocationStore } from "@/features/store/location/use-location-store";
import { useEffect, useState } from "react";

const DynamicMap = dynamic(() => import("@/components/location/map"), {
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <p>Loading map...</p>
    </div>
  ),
  ssr: false
});

export default function App() {
    const [mounted, setMounted] = useState(false);
  const { position, setPosition, setLocation } = useLocationStore();

  useEffect(()=>{
    setMounted(true)
  },[])
  useEffect(() => {
    if (position[0] === 0 && position[1] === 0) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            setPosition([latitude, longitude]);
            setLocation("Current location(May be miscalcuated)");
          },
          (error) => {
            console.error("Error getting location:", error);
            setPosition([27.7172, 85.324]);
            setLocation("Default location");
          }
        );
      } else {
        setPosition([27.7172, 85.324]); 
        setLocation("Default location");
      }
    }
  }, [position, setPosition, setLocation]);
  if(!mounted) return null;

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex-1 w-full">
        <DynamicMap />
      </div>
    </div>
  );
}