import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import type { InventoryFormField } from "@/types/types";
import { PlusIcon } from "lucide-react";

interface formProps {
  formFields: InventoryFormField[];
  sheet: string;
  invokeLocationDashboard?: boolean;
}
export function InputSheet({
  formFields,
  sheet,
  invokeLocationDashboard = false,
}: formProps) {
  console.log("Form fields:", formFields);
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
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
            <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Username</Label>
            <Input id="sheet-demo-username" defaultValue="@peduarte" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
