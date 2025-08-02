import { Cart } from "@/components/Cart/Cart";

export default async function CartPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-32">
      <Cart />
    </main>
  );
}
