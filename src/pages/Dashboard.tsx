import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  PlusCircle,
  Users,
  TrendingUp,
  Receipt
} from "lucide-react";
import { Link } from "react-router-dom";

const mockRecentActivity = [
  { id: 1, description: "Dinner at Olive Garden", amount: 45.50, paidBy: "You", group: "Roommates", date: "Today" },
  { id: 2, description: "Groceries", amount: 120.00, paidBy: "Sarah", group: "Roommates", date: "Yesterday" },
  { id: 3, description: "Concert tickets", amount: 89.99, paidBy: "Mike", group: "Friends", date: "2 days ago" },
  { id: 4, description: "Gas for road trip", amount: 65.00, paidBy: "You", group: "Weekend Trip", date: "3 days ago" },
];

const Dashboard = () => {
  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Welcome back, Alex! 👋
            </h1>
            <p className="text-muted-foreground mt-1">
              Here's what's happening with your expenses
            </p>
          </div>
          <Link to="/add-expense">
            <Button size="lg">
              <PlusCircle className="w-5 h-5" />
              Add Expense
            </Button>
          </Link>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="primary" className="animate-fade-in">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90 flex items-center gap-2">
                <Wallet className="w-4 h-4" />
                Total Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display">+$125.50</div>
              <p className="text-sm opacity-80 mt-1">Overall, you are owed</p>
            </CardContent>
          </Card>

          <Card variant="success" className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90 flex items-center gap-2">
                <ArrowDownLeft className="w-4 h-4" />
                You Are Owed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display">$245.00</div>
              <p className="text-sm opacity-80 mt-1">From 3 friends</p>
            </CardContent>
          </Card>

          <Card variant="coral" className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90 flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4" />
                You Owe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display">$119.50</div>
              <p className="text-sm opacity-80 mt-1">To 2 friends</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats & Recent Activity */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Quick Stats */}
          <Card variant="outlined" className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Quick Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-medium">Active Groups</span>
                </div>
                <span className="text-2xl font-bold text-foreground">4</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-secondary rounded-xl flex items-center justify-center">
                    <Receipt className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <span className="font-medium">This Month</span>
                </div>
                <span className="text-2xl font-bold text-foreground">12</span>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card variant="default" className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Receipt className="w-5 h-5 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockRecentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        activity.paidBy === "You" ? "gradient-primary" : "gradient-secondary"
                      }`}>
                        <Receipt className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{activity.description}</p>
                        <p className="text-sm text-muted-foreground">
                          {activity.paidBy} paid • {activity.group}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${
                        activity.paidBy === "You" ? "text-success" : "text-coral"
                      }`}>
                        {activity.paidBy === "You" ? "+" : "-"}${activity.amount.toFixed(2)}
                      </p>
                      <p className="text-sm text-muted-foreground">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
