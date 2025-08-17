import { Route, Routes } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Dashboard from "./Pages/Dashboard";
import Inventory from "./Pages/Inventory/Inventory";
import Orders from "./Pages/Orders/Orders";
import Suppliers from "./Pages/Suppliers/Suppliers";
import Products from "./Pages/Products";
import Employees from "./Pages/Employees";
import Settings from "./Pages/Settings";
import EmployeePage from "./Pages/EmployeePage";
import Customers from "./Pages/Customers";
import Shop from "./Pages/Shop/Shop";
import Tasks from "./Pages/Tasks/Tasks";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/:id" element={<EmployeePage />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}

export default App;
