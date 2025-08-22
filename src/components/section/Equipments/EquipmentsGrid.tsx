import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { JSX } from "react";

interface EquipmentsCardProps {
  name: string;
  description: string;
  thumbnail: string | JSX.Element;
  className?: string;
}

interface EquipmentItem {
  name: string;
  description: string;
  thumbnail: string | JSX.Element;
}

interface EquipmentsGridProps {
  equipments: EquipmentItem[];
}

export const EquipmentsCard = ({
  name,
  description,
  thumbnail,
  className = "",
}: EquipmentsCardProps) => {
  return (
    <Card className={className}>
      <div className="flex justify-center p-5 h-50 w-auto align-center">
        {typeof thumbnail === "string" ? (
          <img
            src={thumbnail}
            alt={name}
            className="max-w-50 max-h-50 w-auto h-[100%] object-contain"
          />
        ) : (
          thumbnail
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-lg text-inter">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export const EquipmentsGrid = ({ equipments }: EquipmentsGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {equipments.map((item) => (
        <EquipmentsCard
          key={item.name}
          name={item.name}
          description={item.description}
          thumbnail={item.thumbnail}
        />
      ))}
    </div>
  );
};
