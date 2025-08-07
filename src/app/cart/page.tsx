import { Typography } from "@/components/Typography/Typography";
import { CartItems } from "@/components/CartItems/CartItems";
import { CartItemsNumber } from "@/components/CartItemsNumber/CartItemsNumber";
import { OrderSummary } from "@/components/OrderSummary/OrderSummary";
import { NavigateBackButton } from "@/components/NavigateBackButton/NavigateBackButton";
import { Container } from "@/components/Container/Container";

export const metadata = {
  title: "GamerShop - Cart",
  description: "Your cart of games",
};

export default async function CartPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-172px)] w-full flex-col items-center justify-between px-6 pt-16 lg:px-32">
      <Container>
        <NavigateBackButton label="Back to Catalog" />

        <div className="mb-8 xl:mb-12">
          <Typography variant="2xl-bold" className="mb-3" asChild>
            <h1>Your Cart</h1>
          </Typography>
          <CartItemsNumber />
        </div>

        <div className="mb-8 gap-x-20 xl:mb-12 xl:flex">
          <div className="mx-auto w-full xl:max-w-[678px]">
            <CartItems />
          </div>

          <div className="mt-12 flex flex-col gap-y-8 xl:mt-0 xl:w-[522px]">
            <OrderSummary />
          </div>
        </div>
      </Container>
    </main>
  );
}
