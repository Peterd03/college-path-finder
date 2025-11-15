import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { UserCheck, Sliders, Target } from 'lucide-react';
import Layout from '@/components/Layout';

const Landing = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            College ROI Navigator
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Find colleges that balance low cost, low debt, and strong long-term outcomes.
          </p>
          <Link to="/about-you">
            <Button size="lg" className="text-lg px-8 py-6 h-auto shadow-medium hover:shadow-large transition-all">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Three Steps Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <UserCheck className="h-8 w-8 text-primary" />
              </div>
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Tell us about yourself</h3>
              <p className="text-muted-foreground">
                Share your background, degree type, field of study, and budget
              </p>
            </Card>

            <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-shadow">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Sliders className="h-8 w-8 text-secondary" />
              </div>
              <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Set your priorities</h3>
              <p className="text-muted-foreground">
                Use sliders to weight what matters most: cost, earnings, debt, and more
              </p>
            </Card>

            <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-shadow">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">See your personalized college matches</h3>
              <p className="text-muted-foreground">
                Get recommendations with ROI metrics, debt estimates, and outcomes data
              </p>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
