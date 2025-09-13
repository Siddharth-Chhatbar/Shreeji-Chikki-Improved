import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { SidebarProvider } from "../components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";
function getCookieValue(name: string) {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];
}

const MainLayout = () => {
  const cookieStore = getCookieValue("sidebar_state");
  const defaultOpen = cookieStore === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar variant="sidebar" />
      <div className="w-full h-full">
        <Navbar />
        <main className="px-4 pb-4">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
