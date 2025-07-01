import { useLocation } from "react-router";
import { SidebarTrigger } from "./ui/sidebar";
import { ModeToggle } from "./mode-toggle";
import { Badge } from "./ui/badge";

const routes: Record<string, string> = {
  "/": "Dashboard",
  "/inventory": "Inventory",
  "/orders": "Orders",
  "/products": "Products",
  "/suppliers": "Suppliers",
  "/customers": "Customers",
  "/employees": "Employees",
  "/tasks": "tasks",
};

const Navbar = () => {
  const location = useLocation();
  const pageName = routes[location.pathname] || "Unknown";

  return (
    <nav className="flex items-center justify-between p-4 sticky top-0 z-10 backdrop-blur-lg">
      {/* Left  */}
      <SidebarTrigger />
      {/* Right  */}
      <div className="flex items-center gap-4">
        <Badge>{pageName}</Badge>
        <ModeToggle />
        {/*Add avatar for account login and all from clerk*/}
      </div>
    </nav>
  );
};

export default Navbar;
