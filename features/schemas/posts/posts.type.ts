import {  RoomFor, RoomStatus, SavedPost } from "@/generated/prisma";
import { UserType } from "../room/room.type";

export interface RoomDataType{
    id : string,
    roomImages : string[],
    roomBilling : {
        id : string,
        roomCost : number
    } | null,
    title : string,
    roomStatus : RoomStatus,
    description : string,
    location : string,
    beds : number,
    toilet : number,
    roomCapacity : number,
    roomFor : "STUDENTS" | "FAMILY" | "BUSINESS";
    roomType : "FLAT" | "ROOM" | "SHUTTER";
    lat ?: number,
    lon ?: number,
}


export interface PostsDataTypeFromServer{
    id : string,
    roomId : string,
    ownerId : string,
    createdAt : Date,
    owner : UserType,
    room : RoomDataType,
    savedPost : SavedPost[]
}