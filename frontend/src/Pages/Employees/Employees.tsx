import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { InputSheet } from "@/components/input-sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockEmployeesData } from "@/mock_data/mock-employees-data";

const Employees = () => {
  // Add dependency to use memo when data is fetched from the backend
  return (
    <Tabs defaultValue="all">
      <div className="flex flex-row justify-between">
        <div>
          <TabsList>
            <TabsTrigger value="all"> All </TabsTrigger>
            {/* Infer this from time entries*/}
            <TabsTrigger value="on-holiday"> On Holiday </TabsTrigger>
          </TabsList>
        </div>
        <div>
          <InputSheet sheet="employee" />
        </div>
      </div>
      <TabsContent value="all" className="pb-4">
        <DataTable columns={columns} data={mockEmployeesData} />
      </TabsContent>
      <TabsContent value="on-holiday" className="pb-4">
        <DataTable
          columns={columns}
          data={mockEmployeesData}
        />
      </TabsContent>
    </Tabs>
  );

};

export default Employees;
