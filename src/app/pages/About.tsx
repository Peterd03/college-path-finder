import Layout from '@/app/components/Layout';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">About College ROI Navigator</h1>
        
        <Card className="p-8 shadow-medium">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              College ROI Navigator helps prospective students and their families evaluate college options 
              based on comprehensive metrics including cost, debt burden, earnings potential, and equity outcomes.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Why This Matters</h2>
            <p className="text-muted-foreground mb-6">
              We believe that every student deserves access to clear, data-driven information when making 
              one of life's most important decisions. Our tool is especially designed to support vulnerable 
              student populations, including low-income students, first-generation college students, and 
              student parents.
            </p>

            <h2 className="text-2xl font-semibold mb-4">What We Measure</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
              <li><strong>Net Price:</strong> The actual cost you'll pay after grants and scholarships</li>
              <li><strong>Return on Investment (ROI):</strong> How your earnings potential compares to your investment</li>
              <li><strong>Debt Burden:</strong> Expected student loan debt and time to repay</li>
              <li><strong>Graduation Rates:</strong> The likelihood of completing your degree on time</li>
              <li><strong>Equity Metrics:</strong> Support for underrepresented and low-income students</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
            <p className="text-muted-foreground">
              We use comprehensive federal data combined with your personal priorities to generate 
              personalized college recommendations. Our algorithm considers your background, budget, 
              and what matters most to you to find institutions that offer the best combination of 
              affordability, outcomes, and support.
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default About;
