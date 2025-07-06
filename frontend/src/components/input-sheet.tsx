import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import InventoryForm from "./forms/inventory-form";
import type { JSX } from "react";

interface formProps {
  // formFields: InventoryFormField[];
  sheet: string;
  invokeLocationDashboard?: boolean;
}
export function InputSheet({
  sheet,
  invokeLocationDashboard = false,
}: formProps) {
  const form: Record<string, JSX.Element | null> = {
    inventory: <InventoryForm />,
    task: null,
  };
  const isScreenMD = useMediaQuery("(max-width: 768px)");
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={invokeLocationDashboard ? "outline" : "default"}
          size={invokeLocationDashboard || isScreenMD ? "icon" : "default"}
        >
          {/* <p className="hidden md:block"> */}
          <p
            className={cn(
              invokeLocationDashboard ? "hidden" : "hidden md:block",
            )}
          >
            Add <span className="capitalize inline">{sheet}</span>
          </p>
          <PlusIcon
            className={cn(invokeLocationDashboard ? "" : "md:hidden")}
          />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll">{form[sheet]}</SheetContent>
    </Sheet>
  );
}
