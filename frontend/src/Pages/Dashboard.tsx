import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
            <CardDescription>Revenue from 15 May</CardDescription>
            {/*TODO: Add a calender option and a selector to get the revenue*/}
            <CardAction>Calender</CardAction>
            <CardAction>Selector</CardAction>
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
            <CardAction>Add</CardAction>
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
            <CardDescription>Deliveries arriving today</CardDescription>
            {/*TODO: Add a calender option and an add button */}
            <CardAction>Add</CardAction>
            <CardAction>Calender</CardAction>
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
            <CardAction>Add</CardAction>
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
        <Card>Sales Trend Line Chart</Card>
        <Card>Pie chart for product categories that were sold</Card>
        <Card className="col-span-2"> Table for low stock items </Card>
      </div>
    </div>
  );
};

export default Dashboard;
