import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wallet,
  ArrowRight,
  Check,
  User
} from "lucide-react";

const mockBalances = [
  { id: 1, name: "Sarah Johnson", avatar: "S", amount: 85.00, type: "owed" },
  { id: 2, name: "Mike Chen", avatar: "M", amount: 45.50, type: "owe" },
  { id: 3, name: "Emma Wilson", avatar: "E", amount: 120.00, type: "owed" },
  { id: 4, name: "James Brown", avatar: "J", amount: 74.00, type: "owe" },
  { id: 5, name: "Lisa Davis", avatar: "L", amount: 40.00, type: "owed" },
];

const Balances = () => {
  const youAreOwed = mockBalances
    .filter((b) => b.type === "owed")
    .reduce((acc, b) => acc + b.amount, 0);
  const youOwe = mockBalances
    .filter((b) => b.type === "owe")
    .reduce((acc, b) => acc + b.amount, 0);
  const netBalance = youAreOwed - youOwe;

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">
            Balances
          </h1>
          <p className="text-muted-foreground mt-1">
            See who owes whom and settle up
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card 
            variant={netBalance >= 0 ? "success" : "coral"} 
            className="animate-fade-in"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium opacity-90 flex items-center gap-2">
                <Wallet className="w-4 h-4" />
                Net Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display">
                {netBalance >= 0 ? "+" : "-"}${Math.abs(netBalance).toFixed(2)}
              </div>
              <p className="text-sm opacity-80 mt-1">
                {netBalance >= 0 ? "Overall, you are owed" : "Overall, you owe"}
              </p>
            </CardContent>
          </Card>

          <Card variant="outlined" className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                You Are Owed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display text-success">
                ${youAreOwed.toFixed(2)}
              </div>
            </CardContent>
          </Card>

          <Card variant="outlined" className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                You Owe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-display text-coral">
                ${youOwe.toFixed(2)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Balance List */}
        <Card variant="default" className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Individual Balances
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockBalances.map((balance, index) => (
                <div
                  key={balance.id}
                  className="flex items-center justify-between p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors animate-fade-in"
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                      balance.type === "owed" 
                        ? "gradient-success text-success-foreground" 
                        : "gradient-coral text-coral-foreground"
                    }`}>
                      {balance.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{balance.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {balance.type === "owed" 
                          ? "owes you" 
                          : "you owe"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className={`text-xl font-bold ${
                        balance.type === "owed" ? "text-success" : "text-coral"
                      }`}>
                        {balance.type === "owed" ? "+" : "-"}${balance.amount.toFixed(2)}
                      </p>
                    </div>
                    <Button 
                      variant={balance.type === "owed" ? "success" : "coral"}
                      size="sm"
                    >
                      {balance.type === "owed" ? (
                        <>
                          Remind <ArrowRight className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Settle <Check className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Balances;
