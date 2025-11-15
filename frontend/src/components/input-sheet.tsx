import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import InventoryForm from "./forms/inventory-form";
import TaskForm from "./forms/task-form";
import SupplierForm from "./forms/supplier-form";
import ProductForm from "./forms/product-form";
import CustomerForm from "./forms/customer-form";
import EmployeeForm from "./forms/employee-form";

import type {
  InputSheetDataMap,
  InputSheetType,
  InventoryItem,
  TasksItem,
} from "@/types/types";
import type { JSX } from "react";

interface FormProps<T extends InputSheetType> {
  sheet: T;
  data: InputSheetDataMap[T];
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function InputSheet<T extends InputSheetType>({
  sheet,
  data,
  open,
  setOpen,
}: FormProps<T>) {
  const form: Record<InputSheetType, JSX.Element> = {
    inventory: <InventoryForm data={data as InventoryItem} />,
    task: <TaskForm data={data as TasksItem} />,
    supplier: <SupplierForm />,
    product: <ProductForm />,
    customer: <CustomerForm />,
    employee: <EmployeeForm />,
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button onClick={() => (data = null)}>
          <span className="capitalize">Add {sheet}</span>
        </Button>
      </SheetTrigger>

      <SheetContent className="overflow-y-auto">{form[sheet]}</SheetContent>
    </Sheet>
  );
}
