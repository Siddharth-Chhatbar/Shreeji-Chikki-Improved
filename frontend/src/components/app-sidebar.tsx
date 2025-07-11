import {
  Box,
  Container,
  FileCheck2,
  IdCardLanyard,
  LayoutDashboard,
  PackageSearch,
  Settings,
  ShoppingBag,
  SquareUser,
  Store,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { NavLink } from "react-router";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Inventory",
    url: "/inventory",
    icon: Box,
  },
  {
    title: "Orders",
    url: "/orders",
    icon: PackageSearch,
  },
  {
    title: "Tasks",
    url: "/tasks",
    icon: FileCheck2,
  },
  {
    title: "Suppliers",
    url: "/suppliers",
    icon: Container,
  },
  {
    title: "Products",
    url: "/products",
    icon: ShoppingBag,
  },
  {
    title: "Customers",
    url: "/customers",
    icon: SquareUser,
  },
  {
    title: "Employees",
    url: "/employees",
    icon: IdCardLanyard,
  },
  {
    title: "Shop",
    url: "/shop",
    icon: Store,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open, isMobile, setOpenMobile } = useSidebar();
  const isSidebarOpen = isMobile || open;

  const handleNavLinkClick = () => {
    setOpenMobile(false);
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {isSidebarOpen ? (
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        onClick={handleNavLinkClick}
                        {...(item.title === "Shop" && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  ) : (
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton asChild>
                            <NavLink
                              to={item.url}
                              {...(item.title === "Shop" && {
                                target: "_blank",
                                rel: "noopener noreferrer",
                              })}
                            >
                              <item.icon />
                            </NavLink>
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{item.title}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
