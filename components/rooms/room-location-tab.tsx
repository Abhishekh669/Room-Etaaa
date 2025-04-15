"use client";
import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { RoomType } from "@/features/schemas/room/room.type";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import L from 'leaflet';

// Fix for default marker icon
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface RoomLocationTabProps {
  room: RoomType;
}

export const RoomLocationTab = ({ room }: RoomLocationTabProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="p-6 border rounded-lg bg-white">
      <h3 className="text-lg font-semibold mb-2">Location Information</h3>

      <div className="flex items-center mb-4">
        <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
        <div>
          <p className="text-sm text-muted-foreground">Address</p>
          <p className="font-medium">{room.location}</p>
        </div>
      </div>

      {room.lat && room.lon && (
        <>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground mb-2">Coordinates</p>
            <p className="font-medium">Latitude: {room.lat.toFixed(6)}</p>
            <p className="font-medium">Longitude: {room.lon.toFixed(6)}</p>
          </div>

          <div className="mt-6 h-[400px] rounded-lg overflow-hidden">
            <MapContainer
              center={[room.lat, room.lon]}
              zoom={15}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[room.lat, room.lon]}>
                <Popup>{room.location}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </>
      )}
    </div>
  );
};