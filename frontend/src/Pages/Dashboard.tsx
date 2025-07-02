import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RevenueExpenditureChart } from "@/components/revenue-expenditure-chart";
import { ItemsPieChart } from "@/components/items-pie-chart";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LowStockTable } from "@/components/low-stock-table";
import { NavLink } from "react-router";

const Dashboard = () => {
  const actionCards = [
    {
      title: "Tasks",
      subTitle: "Pending tasks",
      quantity: 1234,
      buttonName: "Add Task",
      page: "/tasks",
    },
    {
      title: "New Orders",
      subTitle: "Todays new orders",
      quantity: 1234,
      buttonName: "Add New Order",
      page: "/orders",
    },
    {
      title: "Inbound Shipments",
      subTitle: "Arriving today",
      quantity: 1234,
      buttonName: "Add new inbound order",
      page: "/deliveries?type=inbound",
    },
    {
      title: "Deliveries Pending",
      subTitle: "Todays pending deliveries",
      quantity: 1234,
      buttonName: "Add new delivery",
      page: "/deliveries",
    },
  ];

  const handleAddButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    action: string,
  ) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(action + " button is clicked");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {actionCards.map((actionCard) => (
          <NavLink to={actionCard.page} key={actionCard.title}>
            <Card className="cursor-pointer">
              <CardHeader>
                <CardTitle>{actionCard.title}</CardTitle>
                <CardDescription className="mt-1.5">
                  {actionCard.subTitle}
                </CardDescription>
                <CardAction>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={(e) => {
                      handleAddButtonClick(e, actionCard.buttonName);
                    }}
                  >
                    <PlusIcon />
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p className="text-2xl">{actionCard.quantity}</p>
              </CardContent>
            </Card>
          </NavLink>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="h-full">
          <ItemsPieChart />
        </div>
        <div className="h-full">
          <LowStockTable />
        </div>
        <div className="col-span-1 lg:col-span-2">
          <RevenueExpenditureChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
