"use client";

import type { InventoryItem } from "@/types/types";
import { type ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<InventoryItem>[] = [
  {
    accessorKey: "name",
    header: "Product Name",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
