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
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Supplier name must be greater than 2 characters" })
    .max(100, { message: "Supplier name must be at most 100 characters" }),
  address: z
    .string()
    .trim()
    .min(5, { message: "Address must be greater than 5 characters" })
    .max(300, { message: "Address must be at most 300 characters" }),
  phone_number: z
    .string()
    .trim()
    .regex(/^\+?\d{10,13}$/, {
      message: "Phone number must be 10–13 digits (optional leading +)",
    }),
});

const SupplierForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      phone_number: "",
    },
  });
  return (
    <div>
      <SheetHeader>
        <SheetTitle>Supplier</SheetTitle>
        <SheetDescription>Add or Edit a Supplier.</SheetDescription>
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
                  <Input {...field} placeholder="Enter supplier name..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Enter supplier address..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input {...field} type="tel" placeholder="Enter supplier phone number..." />
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

export default SupplierForm;
