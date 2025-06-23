import { NavLink } from "react-router";
import { SidebarTrigger } from "./ui/sidebar";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      {/* Left  */}
      <SidebarTrigger />
      {/* Right  */}
      <div className="flex items-center gap-4">
        <NavLink to="/"> Dashboard </NavLink>
        <ModeToggle />
        {/*Add avatar for account login and all from clerk*/}
      </div>
    </nav>
  );
};

export default Navbar;
