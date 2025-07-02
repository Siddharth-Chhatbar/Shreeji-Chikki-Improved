import { DataTable } from "@/components/ui/data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { columns } from "./columns";
import mockInventoryData from "@/mock_data/mock-inventory-data";
import { InputSheet } from "@/components/input-sheets/inventory-product-input-sheet";
import type { InventoryFormField } from "@/types/types";

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     // ...
//   ]
// }

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
const Inventory = () => {
  return (
    <Tabs defaultValue="products">
      <div className="flex flex-row justify-between">
        <div>
          <TabsList>
            <TabsTrigger value="products"> Products </TabsTrigger>
            <TabsTrigger value="raw_materials"> Raw Materials </TabsTrigger>
          </TabsList>
        </div>
        <div>
          <InputSheet formFields={newInventoryItemFormFields} />
        </div>
      </div>
      <TabsContent value="products" className="pb-4">
        <DataTable columns={columns} data={mockInventoryData} />
      </TabsContent>
      <TabsContent value="raw_materials">
        <DataTable columns={columns} data={mockInventoryData} />
      </TabsContent>
    </Tabs>
  );
};

export default Inventory;
