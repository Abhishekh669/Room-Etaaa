// "use client"
// import { Card } from '@/components/ui/card'
// import { MapPin } from 'lucide-react'
// import Link from 'next/link'
// import { Input } from '@/components/ui/input'
// import { useState } from 'react'

// interface LocationListProps {
//   currentLocation: string
// }

// export function LocationList({ currentLocation }: LocationListProps) {
//   const [searchTerm, setSearchTerm] = useState('')

//   const filteredLocations = locations.filter(loc => 
//     loc.location.toLowerCase().includes(searchTerm.toLowerCase())
//   )

//   const locationsWithCoords = filteredLocations.filter(loc => loc.lat && loc.lon)
//   const locationsWithoutCoords = filteredLocations.filter(loc => !loc.lat || !loc.lon)

//   return (
//     <div className="space-y-4">
//       <div className="relative">
//         <Input
//           type="text"
//           placeholder="Search locations..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full"
//         />
//       </div>
      
//       {locationsWithCoords.length > 0 && (
//         <div className="space-y-2">
//           <h3 className="text-lg font-semibold">Locations with Map</h3>
//           <div className="space-y-2">
//             {locationsWithCoords.map((loc) => (
//               <Link key={loc.location} href={`/posts/location/${loc.location}`}>
//                 <Card className="p-3 hover:bg-accent transition-colors">
//                   <div className="flex items-center gap-2">
//                     <MapPin className="h-4 w-4 text-primary" />
//                     <div>
//                       <p className="font-medium">{loc.location}</p>
//                       <p className="text-sm text-muted-foreground">
//                         {loc.postCount} {loc.postCount === 1 ? 'post' : 'posts'}
//                       </p>
//                     </div>
//                   </div>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}

//       {locationsWithoutCoords.length > 0 && (
//         <div className="space-y-2">
//           <h3 className="text-lg font-semibold">Other Locations</h3>
//           <div className="space-y-2">
//             {locationsWithoutCoords.map((loc) => (
//               <Link key={loc.location} href={`/posts/location/${loc.location}`}>
//                 <Card className="p-3 hover:bg-accent transition-colors">
//                   <div className="flex items-center gap-2">
//                     <div>
//                       <p className="font-medium">{loc.location}</p>
//                       <p className="text-sm text-muted-foreground">
//                         {loc.postCount} {loc.postCount === 1 ? 'post' : 'posts'}
//                       </p>
//                     </div>
//                   </div>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}

//       {filteredLocations.length === 0 && (
//         <p className="text-sm text-muted-foreground">No locations found</p>
//       )}
//     </div>
//   )
// } 