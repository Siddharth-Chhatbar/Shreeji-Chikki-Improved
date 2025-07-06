import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InputSheet } from "@/components/input-sheet";
import { mockOrderItems } from "@/mock_data/mock-orders-data";

const Orders = () => {
  return (
    <Tabs defaultValue="all">
      <div className="flex flex-row justify-between">
        <div>
          <TabsList>
            <TabsTrigger value="all"> All </TabsTrigger>
            <TabsTrigger value="new"> New </TabsTrigger>
            <TabsTrigger value="delivered"> Delivered </TabsTrigger>
            <TabsTrigger value="out for delivery">Out for Delivery</TabsTrigger>
          </TabsList>
        </div>
        <div>
          <InputSheet sheet="order" />
        </div>
      </div>
      <TabsContent value="all" className="pb-4">
        <DataTable columns={columns} data={mockOrderItems} />
      </TabsContent>
      <TabsContent value="new" className="pb-4">
        <DataTable columns={columns} data={mockOrderItems} />
      </TabsContent>
      <TabsContent value="delivered" className="pb-4">
        <DataTable columns={columns} data={mockOrderItems} />
      </TabsContent>
      <TabsContent value="out for delivery" className="pb-4">
        <DataTable columns={columns} data={mockOrderItems} />
      </TabsContent>
    </Tabs>
  );
};

export default Orders;
