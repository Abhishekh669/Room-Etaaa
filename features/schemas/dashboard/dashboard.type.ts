import { WeekNumberFormatter } from "react-day-picker";
import { UserType } from "../room/room.type";
import { PaymentStatus } from "@/generated/prisma";


export interface RecentPaymentRecordType{
    amountTotal : number,
    client : UserType,
    createdAt : Date,
    description : string,
    dueAmount : number,
    dueMoneyReason : string | null,
    id : string,
    payedAmount : number,
    paymentStatus : PaymentStatus,
    room : {
        roomNumber : number,
    }
}