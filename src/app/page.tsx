import { Homepage } from "@/components/Hoempage/Homepage";
import { Loader } from "@/components/Loader/Loader";
import { Suspense } from "react";

type Props = {
  searchParams: Promise<{
    genre?: string;
  }>;
};

export default async function Home({ searchParams }: Props) {
  const { genre = "All" } = await searchParams;

  return (
    <main className="min-h-screen px-6 lg:px-32">
      <Suspense fallback={<Loader className="h-screen" />}>
        <Homepage genre={genre} />
      </Suspense>
    </main>
  );
}
