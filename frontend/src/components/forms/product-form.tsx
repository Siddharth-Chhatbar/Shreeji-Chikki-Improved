import { useForm } from "react-hook-form";
import * as z from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Product name must be greater than 2 characters" })
    .max(100, { message: "Product name must be at most 100 characters" }),
  price_per_unit_mrp: z
    .number()
    .min(0, { message: "Price cannot be negetive" }),
  price_per_unit_wholesale: z
    .number()
    .min(0, { message: "Price cannot be negetive" }),
  weight_in_grams: z
    .number()
    .min(0, { message: "Weight cannot be negetive" }),
});

const ProductForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  return (
    <div>
      <SheetHeader>
        <SheetTitle>Products</SheetTitle>
        <SheetDescription>Add or Edit a Product.</SheetDescription>
      </SheetHeader>
      <Form {...form}>
        <form className="space-y-8 p-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter a product name..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price_per_unit_mrp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price Per Unit MRP</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter the price per unit in MRP..."
                    type="number"
                    inputMode="numeric"
                    min={0}
                    onChange={(e) => field.onChange(e.currentTarget.value)}
                    autoComplete="off"
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price_per_unit_wholesale"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price Per Unit Wholesale</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter the price per unit for Wholesale..."
                    type="number"
                    inputMode="numeric"
                    min={0}
                    onChange={(e) => field.onChange(e.currentTarget.value)}
                    autoComplete="off"
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weight_in_grams"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Weight (grams)</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter the weight in grams..."
                    type="number"
                    inputMode="numeric"
                    min={0}
                    onChange={(e) => field.onChange(e.currentTarget.value)}
                    autoComplete="off"
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <SheetFooter className="p-0">
            <Button type="submit">Save changes</Button>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </Form>
    </div>
  );
};

export default ProductForm;

