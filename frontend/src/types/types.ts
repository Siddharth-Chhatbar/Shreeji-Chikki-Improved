export type InventoryItem = {
  id: number; // Assuming 'id' as primary key for the inventory record itself
  product_id: number;
  name: string;
  quantity: number;
  location: string;
  status: "In Stock" | "Low Stock" | "Out of Stock" | "Discontinued";
};

export type InventoryFormField = {
  label: string;
  placeholder: string;
};

export type TasksItem = {
  id: number;
  name: string;
  description: string;
  assigned_to: string;
  assigned_by: string;
  due_date: string;
  status: "Pending" | "Completed";
};
