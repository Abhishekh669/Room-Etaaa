import { isNumberObject } from "util/types";
import { UserType } from "../../room/room.type";
import { number } from "zod";

export interface SavedPostTypeFromServer{
    id : string,
    postId : string,
    userId : string,
    savedDate : Date,
    createdAt : Date,
    post : SavedPostDataType
}


export interface SavedPostDataType{
    id : string,
    owner : UserType,
    room :  {
        id : string,
        roomImages : string[],
        roomBilling : {
            id : string,
            roomCost : number
        } | null,
        title : string,
        roomStatus : "VACANT" | "OCCUPIED" | "MAINTENANCE",
        description : string,
        location : string,
        lat ?: number | null |  undefined,
        lon ?: number | null |  undefined,
        beds : number,
        toilet : number,
        roomCapacity : number,
        numberOfRooms : number,
        roomNumber : number,
        roomFor : "STUDENTS" | "FAMILY" | "BUSINESS",
        roomType : "FLAT" | "ROOM" | "SHUTTER",
    }
}