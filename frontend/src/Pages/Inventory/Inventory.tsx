import { Card, CardContent } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { columns } from "./columns";
import mockInventoryData from "@/mock_data/mock-inventory-data";

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
const Inventory = () => {
  return (
    <Tabs defaultValue="products">
      <TabsList>
        <TabsTrigger value="products"> Products </TabsTrigger>
        <TabsTrigger value="raw_materials"> Raw Materials </TabsTrigger>
      </TabsList>
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
