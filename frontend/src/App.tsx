import { Route, Routes } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Dashboard from "./Pages/Dashboard";
import Inventory from "./Pages/Inventory";
import Orders from "./Pages/Orders";
import Suppliers from "./Pages/Suppliers";
import Products from "./Pages/Products";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
