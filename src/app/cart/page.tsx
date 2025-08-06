import { Typography } from "@/components/Typography/Typography";
import { CartItems } from "@/components/CartItems/CartItems";
import { CartItemsNumber } from "@/components/CartItemsNumber/CartItemsNumber";
import { OrderSummary } from "@/components/OrderSummary/OrderSummary";
import Link from "next/link";
import Image from "next/image";

export default async function CartPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-between px-6 pt-16 lg:px-0">
      <div className="w-full">
        <Link
          href="/"
          className="mb-8 flex items-center justify-start gap-x-4 py-4 lg:-mb-0 lg:py-6"
        >
          <Image
            src="arrow-left.svg"
            alt="Back to Catalog"
            width={12}
            height={12}
          />
          <Typography variant="ag-medium" asChild>
            <span>Back to Catalog</span>
          </Typography>
        </Link>

        <div className="mb-8 lg:mb-12">
          <Typography variant="2xl-bold" className="mb-3" asChild>
            <h1>Your Cart</h1>
          </Typography>
          <CartItemsNumber />
        </div>

        <div className="gap-x-20 lg:flex">
          <div className="w-full max-w-[678px]">
            <CartItems />
          </div>

          <div className="mt-12 flex flex-col gap-y-8 lg:mt-0 lg:w-[522px]">
            <OrderSummary />
          </div>
        </div>
      </div>
    </main>
  );
}
