import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { InputSheet } from "@/components/input-sheet";
import { mockSuppliersData } from "@/mock_data/mock-suppliers-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Suppliers = () => {
  return (
    <Tabs defaultValue="all">
      <div className="flex flex-row justify-between">
        <div>
          <TabsList>
            <TabsTrigger value="all"> All </TabsTrigger>
            <TabsTrigger value="is-active"> Active Orders </TabsTrigger>
          </TabsList>
        </div>
        <div>
          <InputSheet sheet="supplier" />
        </div>
      </div>
      <TabsContent value="all" className="pb-4">
        <DataTable columns={columns} data={mockSuppliersData} />
      </TabsContent>
      <TabsContent value="is-active" className="pb-4">
        <DataTable
          columns={columns}
          data={mockSuppliersData.filter((supplier) => supplier.has_active_order === true)}
        />
      </TabsContent>
    </Tabs>
  );

};

export default Suppliers;
