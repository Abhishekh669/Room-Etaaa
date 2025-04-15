"use client"

import { useEffect, useState } from 'react'
import { useRoomId } from '@/features/hooks/params-id/use-rooms-id'
import { useGetRoomPaymentRecords } from '@/features/hooks/tanstacks/query-hooks/rooms/use-get-room-payment-records'
import { useCreatePaymentRecords } from '@/features/hooks/tanstacks/mutate-hooks/rooms/use-create-payment-records'
import { useUpdatePaymentRecord } from '@/features/hooks/tanstacks/mutate-hooks/rooms/use-update-payment-record'
import { useDeletePaymentRecords } from '@/features/hooks/tanstacks/mutate-hooks/rooms/use-delete-payment-records'
import { RoomBilling, RoomPaymentRecord } from '@/generated/prisma'
import { toast } from 'sonner'
import PaymentRecords from '@/components/rooms/payment-records/payment-records'
import { UserType } from '@/features/schemas/room/room.type'
import AddPaymentRecordDialogBox from '@/components/rooms/payment-records/add-payment-record'
import DeletePaymentRecordDialog from '@/components/rooms/payment-records/delete-payment-record'
import UpdatePaymentRecordDialogBox from '@/components/rooms/payment-records/update-payment-record'
import { Button } from '@/components/ui/button'
import HeaderPage from '@/components/shared/Header'
import Hint from '@/components/shared/hint'
import RouteBackButton from '@/components/shared/route-back-button'
import { Plus } from 'lucide-react'
import { getClientDataFromRoom } from '@/features/actions/rooms/rooms'

function PaymentRecordPage() {
  const id = useRoomId();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<RoomPaymentRecord | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentRecords, setPaymentRecords] = useState<RoomPaymentRecord[]>([]);
  const [roomBilling, setRoomBilling] = useState<RoomBilling | null>(null)

  const { data: paymentRecordsData, isLoading: isPaymentRecordsLoading } = useGetRoomPaymentRecords(id);
  const [users, setUsers] = useState<UserType[]>([]);
  const { mutate: addPaymentRecord, isPending: isAddPaymentRecordLoading } = useCreatePaymentRecords();
  const { mutate: updatePaymentRecord, isPending: isUpdatePaymentRecordLoading } = useUpdatePaymentRecord();
  const { mutate: deletePaymentRecord, isPending: deletePaymentRecordLoading } = useDeletePaymentRecords();

  useEffect(() => {
    if (paymentRecordsData?.data) {
      setPaymentRecords(paymentRecordsData.data);
    }
  }, [paymentRecordsData]);

  useEffect(()=>{
    const fetchClientsData = async() =>{
      const res = await getClientDataFromRoom(id as string)     
      if(res.success && res.message){
        setUsers(res.clients)
        setRoomBilling(res.roomBilling)
      }
    }
    fetchClientsData()
  },[])

  const handleAddPayment = async ({ userId, amount, description, totalAmount, reason }: { userId: string, amount: string, description: string, totalAmount: number, reason?: string }) => {
    try {
      setIsLoading(true);
      addPaymentRecord({
        roomId: id,
        userId,
        amount: Number(amount),
        description,
        totalAmount,
        reason
      }, {
        onSuccess: (res) => {
          if (res.success) {
            toast.success(res.message);
            setIsAddDialogOpen(false);
          }
        },
        onError: (error: Error) => {
          toast.error(error.message || "Failed to add payment record");
        }
      });
    } catch (error) {
      toast.error("An error occurred while adding the payment record");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdatePayment = async ({ paymentId, amount, description, reason }: { paymentId: string, amount: string, description: string, reason?: string }) => {
    try {
      setIsLoading(true);
      updatePaymentRecord({
        paymentId,
        payedAmount: Number(amount),
        description,
        payedBy: selectedPayment?.payedBy || "",
        reason
      }, {
        onSuccess: (res) => {
          if (res.success) {
            toast.success(res.message);
            setIsUpdateDialogOpen(false);
            setSelectedPayment(null);
          }
        },
        onError: (error: Error) => {
          toast.error(error.message || "Failed to update payment record");
        }
      });
    } catch (error) {
      toast.error("An error occurred while updating the payment record");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeletePayment = async (payment: RoomPaymentRecord) => {
    try {
      setIsLoading(true);
      deletePaymentRecord(payment.id, {
        onSuccess: (res) => {
          if (res.success) {
            toast.success(res.message);
            setIsDeleteDialogOpen(false);
            setSelectedPayment(null);
          }
        },
        onError: (error: Error) => {
          toast.error(error.message || "Failed to delete payment record");
        }
      });
    } catch (error) {
      toast.error("An error occurred while deleting the payment record");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col  gap-y-5">
      <HeaderPage title1="Room" title2="Payment Records" />
      <div className='flex justify-between items-center p-4 '>
        <RouteBackButton  location={`/ghar/rooms/${id}`}/>
        <Button onClick={() => setIsAddDialogOpen(true)} className="bg-red-500 text-white hover:bg-red-600">
          <Plus className='w-4 h-4 mr-2' />
          Add Payment Record
        </Button>
      </div>
      <div>
        <PaymentRecords 
          payments={paymentRecords} 
          onDelete={(payment: RoomPaymentRecord) => {
            setSelectedPayment(payment);
            setIsDeleteDialogOpen(true);
          }}
          onUpdate={(payment: RoomPaymentRecord) => {
            setSelectedPayment(payment);
            setIsUpdateDialogOpen(true);
          }}
        />
      </div>

      {roomBilling && (
        <AddPaymentRecordDialogBox
        open={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        handleSubmit={handleAddPayment}
        users={users || []}
        roomBilling={roomBilling}
        isLoading={isLoading || isAddPaymentRecordLoading}
      />
      )}

      {selectedPayment && (
        <DeletePaymentRecordDialog
          open={isDeleteDialogOpen}
          onClose={() => {
            setIsDeleteDialogOpen(false);
            setSelectedPayment(null);
          }}
          onConfirm={() => handleDeletePayment(selectedPayment)}
          payment={selectedPayment}
          isLoading={isLoading || deletePaymentRecordLoading}
        />
      )}

      {selectedPayment && (
        <UpdatePaymentRecordDialogBox
          open={isUpdateDialogOpen}
          onClose={() => {
            setIsUpdateDialogOpen(false);
            setSelectedPayment(null);
          }}
          handleSubmit={handleUpdatePayment}
          payment={selectedPayment}
          isLoading={isLoading || isUpdatePaymentRecordLoading}
        />
      )}
    </div>
  );
}

export default PaymentRecordPage;
