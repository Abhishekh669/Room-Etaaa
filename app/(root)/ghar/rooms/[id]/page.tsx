import { notFound } from "next/navigation";
import { ArrowLeft, Edit, Trash2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { deleteRoom, getRoomDataById } from "@/actions/room/room";
import { Button } from "@/components/ui/button";
import { RoomStatusBadge } from "@/components/rooms/room-badge-status";
import { RoomImageGallery } from "@/components/rooms/room-image-gallery";
import { RoomDetailsTab } from "@/components/rooms/room-details-tab";
import { RoomClientsTab } from "@/components/rooms/room-client-tab";
import { RoomBillingTab } from "@/components/rooms/room-billing-tab";
import { RoomLocationTab } from "@/components/rooms/room-location";
import { RoomSummaryCard } from "@/components/rooms/room-summary-card";
import EditButton from "@/components/rooms/edit-button";
import DeleteButton from "@/components/rooms/delete-button";
import BackButton from "@/components/rooms/back-button";

async function RoomPageId(props: { params: Promise<{ id: string }> }) {
    const params =await  props.params;
    const room = await getRoomDataById(params.id);
    console.log("this is room Data : ",room)
    if(!room || "error" in room){
        return notFound();
    }


  return (
    <div>
        <div className="p-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <BackButton />
        <div className="flex gap-2">
         <EditButton id={params.id} />
         <DeleteButton id={params.id} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Room {room.roomNumber}</h1>
            <RoomStatusBadge status={room.roomStatus} />
          </div>

          <RoomImageGallery images={room.roomImages ||  []} roomNumber={room.roomNumber} />

          <Tabs defaultValue="details" className="mt-6">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="clients">Clients</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
            </TabsList>

            <TabsContent value="details">
              <RoomDetailsTab room={room} />
            </TabsContent>

            <TabsContent value="clients">
              <RoomClientsTab room={room} />
            </TabsContent>

            <TabsContent value="billing">
              <RoomBillingTab room={room} />
            </TabsContent>

            <TabsContent value="location">
              <RoomLocationTab room={room} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="w-full lg:w-1/3">
          <RoomSummaryCard room={room} />
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default RoomPageId
