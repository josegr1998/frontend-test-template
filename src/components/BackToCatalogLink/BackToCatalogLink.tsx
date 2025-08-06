import Link from "next/link";
import Image from "next/image";
import { Typography } from "@/components/Typography/Typography";

export const BackToCatalogLink = () => (
  <Link
    href="/"
    className="mb-8 flex items-center justify-start gap-x-4 py-4 lg:-mb-0 lg:py-6"
  >
    <Image src="arrow-left.svg" alt="Back to Catalog" width={12} height={12} />
    <Typography variant="ag-medium" asChild>
      <span>Back to Catalog</span>
    </Typography>
  </Link>
);
