import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Receipt, Wallet, Sparkles } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 gradient-primary rounded-xl flex items-center justify-center shadow-colored">
              <span className="text-primary-foreground font-bold">P</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">PennyPilot</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/auth?mode=login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/auth?mode=signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 gradient-hero">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                <Sparkles className="w-4 h-4" />
                <span>The easiest way to split expenses</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Split expenses.{" "}
                <span className="text-gradient-primary">Stay friends.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                PennyPilot makes it simple to split bills with friends, track who owes what, 
                and settle up without awkward conversations. Because money shouldn't ruin friendships.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/auth?mode=signup">
                  <Button variant="hero" size="xl">
                    Get Started Free
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/auth?mode=login">
                  <Button variant="hero-outline" size="xl">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-coral/20 rounded-3xl blur-3xl opacity-50" />
              <img
                src={heroIllustration}
                alt="Friends sharing expenses together"
                className="relative w-full rounded-2xl shadow-hover animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How PennyPilot Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Three simple steps to stress-free expense sharing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Create a Group",
                description: "Start by creating a group for your trip, apartment, or any shared expense.",
                gradient: "gradient-primary",
                delay: "0s",
              },
              {
                icon: Receipt,
                title: "Add Expenses",
                description: "Log expenses as they happen. Split equally or customize who pays what.",
                gradient: "gradient-secondary",
                delay: "0.1s",
              },
              {
                icon: Wallet,
                title: "Settle Up",
                description: "See who owes whom and settle debts with a tap. It's that simple!",
                gradient: "gradient-coral",
                delay: "0.2s",
              },
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative group animate-fade-in"
                  style={{ animationDelay: step.delay }}
                >
                  <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 group-hover:-translate-y-2 h-full">
                    <div className={`w-16 h-16 ${step.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-soft`}>
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="gradient-primary rounded-3xl p-8 md:p-16 text-center shadow-colored">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to simplify expense sharing?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Join thousands of friends who've made splitting bills stress-free.
            </p>
            <Link to="/auth?mode=signup">
              <Button 
                variant="accent" 
                size="xl"
                className="font-bold"
              >
                Start Sharing Expenses
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <span className="font-display font-bold text-lg text-foreground">PennyPilot</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 PennyPilot. Made with ❤️ for friends everywhere.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
