import { Badge } from "@/components/ui/badge";
import { RoomStatus } from "@prisma/client";

interface RoomStatusBadgeProps {
  status: RoomStatus;
}

export const RoomStatusBadge = ({ status }: RoomStatusBadgeProps) => {
  const statusClasses = {
    VACANT: "bg-green-100 text-green-800 border-green-300",
    OCCUPIED: "bg-blue-100 text-blue-800 border-blue-300",
    MAINTENANCE: "bg-amber-100 text-amber-800 border-amber-300",
  };

  const formatStatus = (status: string) => {
    return status.charAt(0) + status.slice(1).toLowerCase();
  };

  return (
    <Badge className={`${statusClasses[status]} px-3 py-1 text-sm`}>
      {formatStatus(status)}
    </Badge>
  );
};