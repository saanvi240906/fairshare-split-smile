import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Plus, 
  Plane, 
  Home, 
  Heart,
  Utensils,
  MoreHorizontal
} from "lucide-react";

const mockGroups = [
  { 
    id: 1, 
    name: "Weekend Trip", 
    members: 5, 
    icon: Plane, 
    gradient: "gradient-primary",
    balance: 85.00,
    isOwed: true 
  },
  { 
    id: 2, 
    name: "Roommates", 
    members: 3, 
    icon: Home, 
    gradient: "gradient-secondary",
    balance: 45.50,
    isOwed: false 
  },
  { 
    id: 3, 
    name: "Friends", 
    members: 8, 
    icon: Heart, 
    gradient: "gradient-coral",
    balance: 120.00,
    isOwed: true 
  },
  { 
    id: 4, 
    name: "Dinner Club", 
    members: 6, 
    icon: Utensils, 
    gradient: "gradient-accent",
    balance: 0,
    isOwed: true 
  },
];

const Groups = () => {
  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Your Groups
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage your expense groups
            </p>
          </div>
          <Button size="lg">
            <Plus className="w-5 h-5" />
            Create Group
          </Button>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Card 
                key={group.id} 
                variant="interactive"
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 ${group.gradient} rounded-2xl flex items-center justify-center shadow-soft`}>
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <Button variant="ghost" size="icon" className="text-muted-foreground">
                      <MoreHorizontal className="w-5 h-5" />
                    </Button>
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {group.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{group.members} members</span>
                  </div>

                  <div className="pt-4 border-t">
                    {group.balance === 0 ? (
                      <p className="text-muted-foreground font-medium">All settled up! ✨</p>
                    ) : (
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {group.isOwed ? "You are owed" : "You owe"}
                        </span>
                        <span className={`font-bold text-lg ${
                          group.isOwed ? "text-success" : "text-coral"
                        }`}>
                          ${group.balance.toFixed(2)}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* Add New Group Card */}
          <Card 
            variant="outlined" 
            className="border-dashed cursor-pointer hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${mockGroups.length * 0.1}s` }}
          >
            <CardContent className="p-6 flex flex-col items-center justify-center min-h-[200px] text-center">
              <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center mb-4">
                <Plus className="w-7 h-7 text-muted-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                Create New Group
              </h3>
              <p className="text-sm text-muted-foreground">
                Start tracking shared expenses
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default Groups;
