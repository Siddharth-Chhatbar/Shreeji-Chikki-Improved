import { DataTable } from "@/components/ui/data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { columns } from "./columns";
import mockInventoryData from "@/mock_data/mock-inventory-data";
import { InputSheet } from "@/components/input-sheet";
import { useState } from "react";
import type { InventoryItem } from "@/types/types";

const Inventory = () => {
  const [open, setOpen] = useState(false);
  const [sheetData, setSheetData] = useState<InventoryItem | null>(null);

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
          <InputSheet
            open={open}
            setOpen={setOpen}
            sheet="inventory"
            data={sheetData}
          />
        </div>
      </div>
      <TabsContent value="products" className="pb-4">
        <DataTable
          columns={columns}
          data={mockInventoryData}
          sheet="inventory"
          onRowClick={(row) => {
            setSheetData(row);
            setOpen(true);
          }}
        />
      </TabsContent>
      <TabsContent value="raw_materials" className="pb-4">
        <DataTable
          columns={columns}
          data={mockInventoryData}
          sheet="inventory"
          onRowClick={(row) => {
            setSheetData(row);
            setOpen(true);
          }}
        />
      </TabsContent>
    </Tabs>
  );
};

export default Inventory;
