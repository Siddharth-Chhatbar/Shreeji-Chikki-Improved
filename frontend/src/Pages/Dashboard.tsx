"use client";
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
import { Calendar, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-1.5">
              <CardTitle>Revenue</CardTitle>
              <CardDescription>Revenue from 15 May</CardDescription>
            </div>
            {/*TODO: Add a calender option and a selector to get the revenue*/}
            <div className="ml-2 flex flex-row gap-3">
              <CardAction>
                <Button variant="outline" size="icon">
                  <Calendar />
                </Button>
              </CardAction>
              <CardAction>
                <Button variant="outline" size="icon">
                  <PlusIcon />
                </Button>
              </CardAction>
            </div>
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
            <CardDescription>Todays new orders</CardDescription>
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
            <div className="flex flex-col gap-1.5">
              <CardTitle>Inbound Shipments</CardTitle>
              <CardDescription>Deliveries arriving today</CardDescription>
            </div>
            {/*TODO: Add a calender option and an add button */}
            <div className="ml-2 flex flex-row gap-3">
              <CardAction>
                <Button variant="outline" size="icon">
                  <Calendar />
                </Button>
              </CardAction>
              <CardAction>
                <Button variant="outline" size="icon">
                  <PlusIcon />
                </Button>
              </CardAction>
            </div>
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
            <CardDescription>To be delievered</CardDescription>
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
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <RevenueExpenditureChart />
        </div>
        <div>
          <ItemsPieChart />
        </div>
        <div className="col-span-1 lg:col-span-2">
          {" "}
          Table for low stock items{" "}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
