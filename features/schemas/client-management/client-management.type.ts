export interface RoomNumberNId{
    id : string,
    roomNumber : number
}
export interface UserForOwnerType{
    id : string,
    name : string | null,
    image : string | null,
    phoneNumber : string | null,
    role : "OWNER" | "ADMIN" | "USER",
    email : string | null,
    rooms : RoomNumberNId[]
}

