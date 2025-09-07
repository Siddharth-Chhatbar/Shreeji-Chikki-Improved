import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { InputSheet } from "@/components/input-sheet";
import { mockSuppliersData } from "@/mock_data/mock-suppliers-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMemo } from "react";

const Suppliers = () => {
  // Add dependency to use memo when data is fetched from the backend
  const activeSuppliers = useMemo(
    () => mockSuppliersData.filter((s) => s.has_active_order), []
  );
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
          <InputSheet sheet="supplier" />
        </div>
      </div>
      <TabsContent value="all" className="pb-4">
        <DataTable columns={columns} data={mockSuppliersData} />
      </TabsContent>
      <TabsContent value="active" className="pb-4">
        <DataTable
          columns={columns}
          data={activeSuppliers}
        />
      </TabsContent>
    </Tabs>
  );

};

export default Suppliers;
