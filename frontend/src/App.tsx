import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Suppliers from "./pages/Suppliers";
import Inventory from "./pages/Inventory";
import Orders from "./pages/Orders";
import InventoryItem from "./pages/InventoryItem";
import SupplierItem from "./components/SupplierItem";
import Clients from "./pages/Clients";
function App() {
  return (
    <Router>
      <div className="bg-neutral-300 h-screen w-screen">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/suppliers" Component={Suppliers} />
          <Route path="/inventory" Component={Inventory} />
          <Route path="/orders" Component={Orders} />
          <Route path="/clients" Component={Clients} />
          <Route path="/inventory/:id" Component={InventoryItem} />
          <Route path="/suppliers/:id" Component={SupplierItem} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
