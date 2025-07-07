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
import { LowStockTable } from "@/components/low-stock-table";
import { NavLink } from "react-router";
import { InputSheet } from "@/components/input-sheet";
// import type { InventoryFormField } from "@/types/types";

// const newInventoryItemFormFields: InventoryFormField[] = [
//   {
//     label: "Supplier Name",
//     placeholder: "Enter Supplier Name...",
//   },
//   {
//     label: "Product",
//     placeholder: "Enter Product/Select Product", // Able to select product from a dropdown
//   },
//   {
//     label: "Amount",
//     placeholder: "Enter Amount...",
//   },
//   {
//     label: "Delivery Date",
//     placeholder: "Select Delivery Date...",
//   },
//   {
//     label: "Comments",
//     placeholder: "",
//   },
// ];

const Dashboard = () => {
  const actionCards = [
    {
      title: "Tasks",
      subTitle: "Pending tasks",
      quantity: 1234,
      buttonName: "task",
      page: "/tasks",
    },
    {
      title: "New Orders",
      subTitle: "Todays new orders",
      quantity: 1234,
      buttonName: "order",
      page: "/orders",
    },
    {
      title: "Inbound Shipments",
      subTitle: "Arriving today",
      quantity: 1234,
      buttonName: "inbound",
      page: "/deliveries?type=inbound",
    },
    {
      title: "Deliveries Pending",
      subTitle: "Todays pending deliveries",
      quantity: 1234,
      buttonName: "delivery",
      page: "/deliveries",
    },
  ];

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
                <CardAction
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <InputSheet
                    sheet={actionCard.buttonName}
                    invokeLocationDashboard={true}
                  />
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
