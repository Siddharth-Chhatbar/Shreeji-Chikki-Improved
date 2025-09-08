import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { InputSheet } from "@/components/input-sheet";
import { mockCustomersData } from "@/mock_data/mock-customers-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Customers = () => {
  // Add dependency to use memo when data is fetched from the backend
  return (
    <Tabs defaultValue="all">
      <div className="flex flex-row justify-between">
        <div>
          <TabsList>
            <TabsTrigger value="all"> All </TabsTrigger>
            <TabsTrigger value="active"> Active Orders </TabsTrigger>
          </TabsList>
        </div>
        <div>
          <InputSheet sheet="customer" />
        </div>
      </div>
      <TabsContent value="all" className="pb-4">
        <DataTable columns={columns} data={mockCustomersData} />
      </TabsContent>
      <TabsContent value="active" className="pb-4">
        <DataTable
          columns={columns}
          data={mockCustomersData}
        />
      </TabsContent>
    </Tabs>
  );

};

export default Customers;

