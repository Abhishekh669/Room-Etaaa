"use client"
import { useState } from "react";
import Image from "next/image";
import { Home } from "lucide-react";

interface RoomImageGalleryProps {
  images: string[];
  roomNumber: number;
}

export const RoomImageGallery = ({ images, roomNumber }: RoomImageGalleryProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative rounded-lg overflow-hidden border shadow-sm lg:w-2/3 aspect-video">
        {images.length > 0 ? (
          <a href={images[activeImageIndex]} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
            <Image
              src={images[activeImageIndex] || "/placeholder.svg"}
              alt={`Room ${roomNumber}`}
              className="object-cover cursor-pointer"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            />
          </a>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400">
            <Home className="h-24 w-24" />
            <p className="mt-2">No images available</p>
          </div>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              className={`relative rounded-md overflow-hidden border transition-all duration-200 ease-in-out ${
                index === activeImageIndex 
                  ? "ring-2 ring-primary scale-105" 
                  : "hover:ring-1 hover:ring-gray-300"
              }`}
              onClick={() => setActiveImageIndex(index)}
              aria-label={`View image ${index + 1}`}
            >
              <div className="aspect-square w-20">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Room ${roomNumber} thumbnail ${index + 1}`}
                  className="object-cover"
                  fill
                />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};