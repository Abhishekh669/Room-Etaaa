import { Badge } from "../ui/badge";

export const RoomStatusBadge = ({ status }: { status: 'VACANT' | 'OCCUPIED' | 'MAINTENANCE' }) => {
  const statusConfig = {
    VACANT: { class: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100', label: 'Vacant' },
    OCCUPIED: { class: 'bg-blue-100 text-blue-700 hover:bg-blue-100', label: 'Occupied' },
    MAINTENANCE: { class: 'bg-amber-100 text-amber-700 hover:bg-amber-100', label: 'Maintenance' }
  };

  const config = statusConfig[status];

  return (
    <Badge variant="outline" className={`z-999 rounded-full px-3 py-1 text-xs font-medium ${config.class}`}>
      {config.label}
    </Badge>
  );
};