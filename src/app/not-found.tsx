// app/not-found/page.tsx (or wherever your 404 lives)
import Link from "next/link";
import { Typography } from "@/components/Typography/Typography";
import { Button } from "@/components/Button/Button";

export default function NotFound() {
  return (
    <main className="flex h-screen items-center justify-center bg-[var(--color-secondary)] px-6">
      <div
        className="animate-slide-in w-full max-w-lg rounded-2xl border border-[var(--color-primary-light)] bg-[var(--color-secondary)] p-10 shadow-lg"
        role="region"
        aria-labelledby="notfound-title"
      >
        <div className="flex items-start justify-center gap-6">
          <div className="min-w-0">
            <Typography variant="2xl-bold" asChild>
              <h2 id="notfound-title" className="mb-2">
                Page not found
              </h2>
            </Typography>

            <Typography variant="ag-regular" asChild>
              <p className="mb-4 text-[var(--color-primary-dark)]">
                We couldn’t find the page you were looking for. It may have been
                moved, removed, or the URL is incorrect.
              </p>
            </Typography>

            <div className="flex flex-wrap items-center gap-3">
              <Link href="/" className="block">
                <Button variant="filled" size="sm">
                  Return home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
