import { Typography } from "@/components/Typography/Typography";

type Props = {
  item: {
    name: string;
    price: number;
  };
};

export const OrderItem = ({ item }: Props) => {
  return (
    <div className="flex justify-between gap-y-3 last:border-b last:border-[var(--color-primary-light)] last:pb-6">
      <Typography variant="lg-regular">{item.name}</Typography>
      <Typography variant="lg-regular">${item.price}</Typography>
    </div>
  );
};
