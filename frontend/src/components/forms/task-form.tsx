import { useForm } from "react-hook-form";
import * as z from "zod/v4";
import { format } from "date-fns";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";

const formSchema = z.object({
  task_name: z
    .string()
    .min(2, { message: "Task name must be greater than 2 characters!" })
    .max(50),
  description: z
    .string()
    .min(5, { message: "Description must be greater than 5 characters!" })
    .max(100),
  assigned_to: z.enum(["A", "B", "C"]),
  assigned_by: z.enum(["A", "B", "C"]),
  due_date: z.date(),
  status: z.enum(["Pending", "Completed"]),
});
const TaskForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      status: "Pending",
      due_date: new Date()
    },
  });
  return (
    <div>
      <SheetHeader>
        <SheetTitle>Task</SheetTitle>
        <SheetDescription>Add or Edit a Task.</SheetDescription>
      </SheetHeader>
      <Form {...form}>
        <form className="space-y-8 p-4">
          <FormField
            control={form.control}
            name="task_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Task Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter a task name..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Enter a task description..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="assigned_to"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Assigned To</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose assignee..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A">A</SelectItem>
                      <SelectItem value="B">B</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="assigned_by"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Assigned By</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Assigned by..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A">A</SelectItem>
                      <SelectItem value="B">B</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="due_date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Due Date</FormLabel>
                <Popover modal={true}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value as Date, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="center">
                    <Calendar
                      mode="single"
                      selected={new Date(field.value)}
                      onSelect={field.onChange}
                      disabled={(date: Date) => {
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        const yesterday = new Date(today);
                        yesterday.setDate(today.getDate() - 1);

                        return date < today || date.getTime() === yesterday.getTime();
                      }}
                      captionLayout="dropdown"
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>)}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a status..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
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

export default TaskForm;
