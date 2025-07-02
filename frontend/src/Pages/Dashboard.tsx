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

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
            <CardDescription className="mt-1.5">Pending tasks</CardDescription>
            {/*TODO: Add a calender option and a selector to get the revenue*/}
            <CardAction>
              <Button variant="outline" size="icon">
                <PlusIcon />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            {/*
             * TODO: Add a setting to select a curreny in the settings page
             *       Initially get the currency from the location of the device
             */}
            <p className="text-2xl">123456</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>New Orders</CardTitle>
            <CardDescription className="mt-1.5">
              Todays new orders
            </CardDescription>
            {/*TODO: Add button*/}
            <CardAction>
              <Button variant="outline" size="icon">
                <PlusIcon />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            {/*
             * TODO: Add how many new orders were created today
             */}
            <p className="text-2xl">123456</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Inbound Shipments</CardTitle>
            <CardDescription className="mt-1.5">Arriving today</CardDescription>
            <CardAction>
              <Button variant="outline" size="icon">
                <PlusIcon />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            {/*
             * TODO: Number of inbound shipments
             */}
            <p className="text-2xl">123456</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Deliveries Pending</CardTitle>
            <CardDescription className="mt-1.5">
              To be delievered
            </CardDescription>
            <CardAction>
              <Button variant="outline" size="icon">
                <PlusIcon />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            {/*
             * TODO: Add how many new orders were created today
             */}
            <p className="text-2xl">123456</p>
          </CardContent>
        </Card>
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
