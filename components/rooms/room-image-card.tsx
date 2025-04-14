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
    <>
      <div className="mb-6 rounded-lg overflow-hidden border">
        {images.length > 0 ? (
          <div className="relative h-[400px]">
            <Image
              src={images[activeImageIndex] || "/placeholder.svg"}
              alt={`Room ${roomNumber}`}
              className="w-full h-full object-cover"
              fill
            />
          </div>
        ) : (
          <div className="w-full h-[400px] flex items-center justify-center bg-gray-200">
            <Home className="h-24 w-24 text-gray-400" />
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2 mb-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`h-20 rounded-md overflow-hidden border cursor-pointer ${
                index === activeImageIndex ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setActiveImageIndex(index)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Room ${roomNumber} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                width={80}
                height={80}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};