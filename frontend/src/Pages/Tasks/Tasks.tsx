import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { mockTasksData } from "@/mock_data/mock-tasks-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InputSheet } from "@/components/input-sheet";
import type { TasksItem } from "@/types/types";
import { useState } from "react";

const Tasks = () => {
  const [open, setOpen] = useState(false);
  const [sheetData, setSheetData] = useState<TasksItem | null>(null);

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
          <InputSheet
            open={open}
            setOpen={setOpen}
            sheet="task"
            data={sheetData}
          />
        </div>
      </div>
      <TabsContent value="all" className="pb-4">
        <DataTable
          columns={columns}
          data={mockTasksData}
          sheet="task"
          onRowClick={(row) => {
            setSheetData(row);
            setOpen(true);
          }}
        />
      </TabsContent>
      <TabsContent value="completed" className="pb-4">
        <DataTable
          columns={columns}
          data={mockTasksData.filter((item) => item.status === "Completed")}
          sheet="task"
          onRowClick={(row) => {
            setSheetData(row);
            setOpen(true);
          }}
        />
      </TabsContent>
      <TabsContent value="pending" className="pb-4">
        <DataTable
          columns={columns}
          data={mockTasksData.filter((item) => item.status === "Pending")}
          sheet="task"
          onRowClick={(row) => {
            setSheetData(row);
            setOpen(true);
          }}
        />
      </TabsContent>
    </Tabs>
  );
};

export default Tasks;
