import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { mockTasksData } from "@/mock_data/mock-tasks-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InputSheet } from "@/components/input-sheet";
import type { InventoryFormField } from "@/types/types";

const newInventoryItemFormFields: InventoryFormField[] = [
  {
    label: "Supplier Name",
    placeholder: "Enter Supplier Name...",
  },
  {
    label: "Product",
    placeholder: "Enter Product/Select Product", // Able to select product from a dropdown
  },
  {
    label: "Amount",
    placeholder: "Enter Amount...",
  },
  {
    label: "Delivery Date",
    placeholder: "Select Delivery Date...",
  },
  {
    label: "Comments",
    placeholder: "",
  },
];
const Tasks = () => {
  return (
    <Tabs defaultValue="all">
      <div className="flex flex-row justify-between">
        <div>
          <TabsList>
            <TabsTrigger value="all"> All </TabsTrigger>
            <TabsTrigger value="completed"> Completed </TabsTrigger>
            <TabsTrigger value="pending"> Pending </TabsTrigger>
          </TabsList>
        </div>
        <div>
          <InputSheet formFields={newInventoryItemFormFields} sheet="task" />
        </div>
      </div>
      <TabsContent value="all" className="pb-4">
        <DataTable columns={columns} data={mockTasksData} />
      </TabsContent>
      <TabsContent value="completed" className="pb-4">
        <DataTable columns={columns} data={mockTasksData} />
      </TabsContent>
      <TabsContent value="pending" className="pb-4">
        <DataTable columns={columns} data={mockTasksData} />
      </TabsContent>
    </Tabs>
  );
};

export default Tasks;
