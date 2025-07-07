import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { mockTasksData } from "@/mock_data/mock-tasks-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InputSheet } from "@/components/input-sheet";

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
          <InputSheet sheet="task" />
        </div>
      </div>
      <TabsContent value="all" className="pb-4">
        <DataTable columns={columns} data={mockTasksData} />
      </TabsContent>
      <TabsContent value="completed" className="pb-4">
        <DataTable
          columns={columns}
          data={mockTasksData.filter((item) => item.status === "Completed")}
        />
      </TabsContent>
      <TabsContent value="pending" className="pb-4">
        <DataTable
          columns={columns}
          data={mockTasksData.filter((item) => item.status === "Pending")}
        />
      </TabsContent>
    </Tabs>
  );
};

export default Tasks;
