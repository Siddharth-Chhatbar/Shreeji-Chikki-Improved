import { NavLink } from "react-router-dom";
const NavBar = () => {
  type NavLinks = {
    label: string;
    href: string;
  };
  const nav_links: Array<NavLinks> = [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Inventory",
      href: "/inventory",
    },
    {
      label: "Suppliers",
      href: "/suppliers",
    },
    {
      label: "Clients",
      href: "/clients",
    },
    {
      label: "Orders",
      href: "/orders",
    },
  ];
  return (
    <nav className="fixed top-0 left-0 h-screen w-1/4 flex flex-col rounded-r-lg drop-shadow-2xl">
      <section>
        {/*Hamburger Icon - Show When in Mobile mode*/}
        {/*Logo - Show when in landscape desktop mode*/}
      </section>
      <section className="">
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
