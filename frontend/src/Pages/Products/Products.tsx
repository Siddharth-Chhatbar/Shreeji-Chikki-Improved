import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { InputSheet } from "@/components/input-sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockProductsData } from "@/mock_data/mock-products-data";

const Products = () => {
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
          <InputSheet sheet="product" />
        </div>
      </div>
      <TabsContent value="all" className="pb-4">
        <DataTable columns={columns} data={mockProductsData} />
      </TabsContent>
      <TabsContent value="active" className="pb-4">
        <DataTable
          columns={columns}
          data={mockProductsData}
        />
      </TabsContent>
    </Tabs>
  );

};

export default Products;
