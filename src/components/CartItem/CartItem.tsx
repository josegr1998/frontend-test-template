import { Game } from "@/types/game";
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
      <div className="relative mx-auto items-stretch gap-x-6 lg:flex">
        <div className="relative mb-4 h-[156px] w-[256px] shrink-0 lg:mb-0">
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

        <button
          type="button"
          onClick={() => handleRemoveItem(item.id)}
          aria-label="Remove item"
          className="absolute right-0 top-0 size-3 cursor-pointer"
        >
          <Image src="delete-icon.svg" alt="Delete Item" fill />
        </button>
      </div>
    </div>
  );
};
