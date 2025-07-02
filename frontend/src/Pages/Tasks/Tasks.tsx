import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { mockTasksData } from "@/mock_data/mock-tasks-data";
const Tasks = () => {
  return (
    <div>
      <DataTable columns={columns} data={mockTasksData} />
    </div>
  );
};

export default Tasks;
