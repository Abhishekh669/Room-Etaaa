import { SavedPost } from "@prisma/client";
import { string } from "zod";

export type RoomStatus = "VACANT" | "OCCUPIED" | "MAINTENANCE";

export interface User {
  id: string;
  name : string | null;
  email: string | null;
  phoneNumber ?: string | null;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PaymentHistory {
  id: string;
  date: Date;
  amount: number;
  userId: string;
  roomId: string;
  description?: string;
}




export  interface Room{
    client ?: User | null,
    clientId ?: string | null,
    clientInitationDate ?: Date | null,
    createdAt : Date,
    description : string,
    electricityBill : number,
    id : string,
    internetBill : number,
    lat ?: number | null,
    location : string,
    lon ?: number | null,
    maxNoOfClient : number,
    numberOfRooms : number, 
    noOfClientLiving ?: number | null,
    otherClients ?: User[],
    owner : User,
    ownerId : string,
    payedMoney ?: number | null,
    roomCost : number,
    roomImages ?: string[],
    roomNumber : number,
    roomStatus : RoomStatus,
    updatedAt : Date,
    waterBill : number,
}



export interface Posts{
  id :  string
  roomId :   string
  roomImages : string[],
  description : string,
  roomStatus : RoomStatus,
  roomNumber : number,
  roomCost : number,
  location : string,
  numberOfRooms : number,
  ownerId : String,
  owner : {
    id : string,
    name : string | null,
    email : string | null,
    phoneNumber : string | null,
  },
  lat ?: number | null,
  lon ?: number | null,
  savedPost : SavedPost[],
  createdAt : Date
}

export interface PostForSavedPost{
    id : string,
    roomId : string,
    roomImages : string[],
    description : string,
    roomStatus : RoomStatus,
    roomNumber : number,
    roomCost : number,
    location : string,
    numberOfRooms : number,
    ownerId : string,
    owner : {
      id : string | null, 
      name : string | null,
      image : string | null,
      phoneNumber : string | null,
    }
}

export interface SavedPostType{
  id : string
  postId : string,
  userId : string,
  savedDate : Date,
  post : PostForSavedPost,
}