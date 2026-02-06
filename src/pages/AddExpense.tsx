import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Receipt,
  Utensils,
  Car,
  ShoppingBag,
  Film,
  Home,
  Plane,
  Gift,
  Zap,
  Check
} from "lucide-react";

const categories = [
  { id: "food", label: "Food & Drinks", icon: Utensils, gradient: "gradient-primary" },
  { id: "transport", label: "Transport", icon: Car, gradient: "gradient-secondary" },
  { id: "shopping", label: "Shopping", icon: ShoppingBag, gradient: "gradient-coral" },
  { id: "entertainment", label: "Entertainment", icon: Film, gradient: "gradient-accent" },
  { id: "housing", label: "Housing", icon: Home, gradient: "gradient-success" },
  { id: "travel", label: "Travel", icon: Plane, gradient: "gradient-primary" },
  { id: "gifts", label: "Gifts", icon: Gift, gradient: "gradient-secondary" },
  { id: "utilities", label: "Utilities", icon: Zap, gradient: "gradient-coral" },
];

const mockGroups = [
  { id: "1", name: "Roommates" },
  { id: "2", name: "Weekend Trip" },
  { id: "3", name: "Friends" },
  { id: "4", name: "Dinner Club" },
];

const AddExpense = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    group: "",
    splitType: "equal",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedCategory) {
      toast({
        title: "Please select a category",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    toast({
      title: "Expense added! 🎉",
      description: `$${formData.amount} has been split with your group.`,
    });

    setIsLoading(false);
    navigate("/dashboard");
  };

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">
            Add Expense
          </h1>
          <p className="text-muted-foreground mt-1">
            Log a new shared expense
          </p>
        </div>

        <Card variant="default" className="animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Receipt className="w-5 h-5 text-primary" />
              Expense Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Category Selection */}
              <div className="space-y-3">
                <Label>Category</Label>
                <div className="grid grid-cols-4 gap-3">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    const isSelected = selectedCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => setSelectedCategory(category.id)}
                        className={`relative flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-200 ${
                          isSelected
                            ? `${category.gradient} text-primary-foreground shadow-colored scale-105`
                            : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-1 right-1 w-5 h-5 bg-background rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                        )}
                        <Icon className="w-6 h-6" />
                        <span className="text-xs font-medium text-center leading-tight">
                          {category.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  placeholder="What was this expense for?"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>

              {/* Amount */}
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                    $
                  </span>
                  <Input
                    id="amount"
                    type="number"
                    step="0.01"
                    min="0.01"
                    placeholder="0.00"
                    className="pl-8"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Group Selection */}
              <div className="space-y-2">
                <Label htmlFor="group">Group</Label>
                <Select
                  value={formData.group}
                  onValueChange={(value) => setFormData({ ...formData, group: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a group" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockGroups.map((group) => (
                      <SelectItem key={group.id} value={group.id}>
                        {group.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Split Type */}
              <div className="space-y-2">
                <Label>Split Type</Label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, splitType: "equal" })}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      formData.splitType === "equal"
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-muted bg-muted/30 text-muted-foreground hover:border-muted-foreground/30"
                    }`}
                  >
                    <p className="font-medium">Split Equally</p>
                    <p className="text-sm opacity-70">Divide among all members</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, splitType: "custom" })}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      formData.splitType === "custom"
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-muted bg-muted/30 text-muted-foreground hover:border-muted-foreground/30"
                    }`}
                  >
                    <p className="font-medium">Custom Split</p>
                    <p className="text-sm opacity-70">Choose who pays what</p>
                  </button>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? "Adding Expense..." : "Add Expense"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default AddExpense;
