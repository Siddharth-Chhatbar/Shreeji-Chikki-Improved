import { NavLink } from "react-router-dom";
import Dashboard from '../svg/Dashboard'
import Suppliers from '../svg/Suppliers'
import Inventory from '../svg/Inventory'
import Orders from '../svg/Orders'
import Clients from '../svg/Clients'

const NavBar = () => {
  type NavLinks = {
    label: JSX.Element;
    href: string;
  };
  const nav_links: Array<NavLinks> = [
    {
      label: <Dashboard></Dashboard>,
      href: "/dashboard",
    },
    {
      label: <Inventory></Inventory>,
      href: "/inventory",
    },
    {
      label: <Suppliers></Suppliers>,
      href: "/suppliers",
    },
    {
      label: <Clients></Clients>,
      href: "/clients",
    },
    {
      label: <Orders></Orders>,
      href: "/orders",
    },
  ];
  return (
    <nav className="fixed top-0 left-0 h-screen w-1/4 flex flex-col rounded-r-lg drop-shadow-2xl">
      <section>
        {/*Hamburger Icon - Show When in Mobile mode*/}
        <img src="/logo.png" className="hidden lg:block" alt="logo"></img>
      </section>
      <section className="pt-16">
        {nav_links.map((nav_link) => (
          <NavLink
            to={nav_link.href}
            className={({ isActive }) =>
              isActive
                ? "h-[72px] w-[300px] rounded-lg text-secondary-75 stroke-secondary-75 hover:bg-secondary-50 hover:text-secondary-300 hover:stroke-secondary-300 flex items-center hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer"
                : "h-[72px] w-[300px] rounded-lg bg-secondary-50 text-secondary-300 stroke-secondary-300 fill-secondary-300 flex items-center"
            }
          >
            {nav_link.label}
          </NavLink>
        ))}
      </section>
    </nav>
  );
};

export default NavBar;
