import { Typography } from "@/components/Typography/Typography";
import { CartItems } from "@/components/CartItems/CartItems";
import { CartItemsNumber } from "@/components/CartItemsNumber/CartItemsNumber";
import { OrderSummary } from "@/components/OrderSummary/OrderSummary";
import { NavigateBackButton } from "@/components/NavigateBackButton/NavigateBackButton";

export const metadata = {
  title: "GamerShop - Cart",
  description: "Your cart of games",
};

export default async function CartPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full flex-col items-center justify-between px-6 pt-16 lg:px-32">
      <div className="w-full max-w-7xl">
        <NavigateBackButton label="Back to Catalog" />

        <div className="mb-8 xl:mb-12">
          <Typography variant="2xl-bold" className="mb-3" asChild>
            <h1>Your Cart</h1>
          </Typography>
          <CartItemsNumber />
        </div>

        <div className="gap-x-20 xl:flex">
          <div className="mx-auto w-full xl:max-w-[678px]">
            <CartItems />
          </div>

          <div className="mt-12 flex flex-col gap-y-8 xl:mt-0 xl:w-[522px]">
            <OrderSummary />
          </div>
        </div>
      </div>
    </main>
  );
}
