import { PaymentHistory, RoomBilling, RoomPaymentRecord } from "@/generated/prisma";

export interface UserType{
    id : string,
    name : string | null,
    image : string | null,
    email : string | null,
    phoneNumber : string | null,
}


export interface RoomWithClientDataType{
    beds : number,
    clientInitationDate ?: Date,
    clients : UserType[],
    description : string,
    dueAmount : number,
    id : string,
    lat ?: number,
    location : string,
    lon ? : number,
    numberOfRooms : number,
    ownerId : string,
    payedAmount : number,
    province : number,
    roomBilling : RoomBilling,
    roomCapacity : number,
    roomImages : string[],
    roomNumber : string,
    roomStatus : 'VACANT' | 'OCCUPIED' | 'MAINTENANCE',
    startedPriceFromDate ?: Date,
    title : string,
    toilet : number,
    roomFor : "STUDENTS" | "FAMILY" | "BUSINESS";
    roomType : "FLAT" | "ROOM" | "SHUTTER";

}



export interface RoomType{
    beds : number,
    clientInitationDate ?: Date,
    clients : UserType[],
    description : string,
    dueAmount : number,
    id : string,
    lastPayedDate ?: Date,
    lat ?: number,
    location : string,
    lon ? : number,
    numberOfRooms : number,
    ownerId : string,
    owner : UserType,
    payedAmount : number,
    province : number,
    roomBilling : RoomBilling,
    roomCapacity : number,
    roomImages : string[],
    roomNumber : number,
    roomStatus : 'VACANT' | 'OCCUPIED' | 'MAINTENANCE',
    startedPriceFromDate ?: Date,
    title : string,
    toilet : number,
    paymentHistory : PaymentHistory[]
    roomPaymentRecord : RoomPaymentRecord[]
}



