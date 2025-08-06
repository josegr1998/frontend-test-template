import { Game } from "@/types/server/game";
import Image from "next/image";
import { NewBadge } from "../NewBadge/NewBadge";
import { Typography } from "../Typography/Typography";

type Props = {
  item: Game;
  handleRemoveItem: (id: string) => void;
};

export const CartItem = ({ item, handleRemoveItem }: Props) => {
  return (
    <div className="border-b border-[var(--color-primary-light)] px-4 py-5 ">
      <div className="relative items-stretch gap-x-6 lg:flex">
        <div className="relative h-[156px] w-[256px] shrink-0">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
          {item.isNew && <NewBadge />}
        </div>
        <div className="flex h-[156px] flex-col justify-between">
          <div>
            <Typography variant="ag-bold" className="mb-3" asChild>
              <h3>{item.genre}</h3>
            </Typography>
            <Typography variant="xl-bold" className="mb-2" asChild>
              <h4>{item.name}</h4>
            </Typography>
            <Typography variant="ag-regular" asChild>
              <p>{item.description}</p>
            </Typography>
          </div>

          <div className="flex justify-end">
            <Typography variant="xl-bold" asChild>
              <p>${item.price}</p>
            </Typography>
          </div>
        </div>

        <Image
          src="delete-icon.svg"
          alt="Delete Item"
          width={12}
          height={12}
          className="absolute right-0 top-0 cursor-pointer"
          onClick={() => handleRemoveItem(item.id)}
        />
      </div>
    </div>
  );
};
