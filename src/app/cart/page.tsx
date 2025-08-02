import Link from "next/link";
import Image from "next/image";
import { Typography } from "@/components/Typography/Typography";
import { CartItems } from "@/components/CartItems/CartItems";
import { CartItemsNumber } from "@/components/CartItemsNumber/CartItemsNumber";
import { OrderSummary } from "@/components/OrderSummary/OrderSummary";
import { Button } from "@/components/Button/Button";

export default async function CartPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-between">
      <div className="w-full">
        <Link href="/" className="flex items-center justify-start gap-x-4 py-6">
          <Image
            src="arrow-left.svg"
            alt="Back to Catalog"
            width={12}
            height={12}
          />
          <Typography variant="ag-medium">Back to Catalog</Typography>
        </Link>

        <div className="mb-12">
          <Typography variant="2xl-bold" className="mb-3">
            Your Cart
          </Typography>
          <CartItemsNumber />
        </div>

        <div className="flex gap-x-20">
          <div className="w-full max-w-[678px]">
            <CartItems />
          </div>

          <div className="flex w-[522px] flex-col gap-y-8">
            <OrderSummary />

            <Link href="/checkout">
              <Button className="w-full" variant="secondary">
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
