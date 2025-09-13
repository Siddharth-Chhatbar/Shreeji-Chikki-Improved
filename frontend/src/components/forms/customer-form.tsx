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
    .min(2, { message: "Name must be greater than 2 characters" })
    .max(100, { message: "Name must be at most 100 characters" }),
  shop_name: z
    .string()
    .trim()
    .min(2, { message: "Shop name must be greater than 2 characters" })
    .max(100, { message: "Shop name must be at most 100 characters" }),
  address: z
    .string()
    .trim()
    .min(5, { message: "Address must be greater than 5 characters" })
    .max(300, { message: "Address must be at most 300 characters" }),
  email: z
    .email({ error: "Enter a valid Email" }),
  phone_number: z
    .string()
    .trim()
    .regex(/^\+?\d{10,13}$/, {
      message: "Phone number must be 10–13 digits (optional leading +)",
    }),
});

const CustomerForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      shop_name: "",
      address: "",
      email: "",
      phone_number: "",
    },
  });
  return (
    <div>
      <SheetHeader>
        <SheetTitle>Customer</SheetTitle>
        <SheetDescription>Add or Edit a Customer.</SheetDescription>
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
                  <Input {...field} placeholder="Enter customer name..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="shop_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter shop name..." />
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
                  <Textarea {...field} placeholder="Enter shop address..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter email..." />
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
                  <Input {...field} type="tel" placeholder="Enter customer phone number..." />
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

export default CustomerForm;
