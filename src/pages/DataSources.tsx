import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const DataSources = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Data Sources</h1>
        
        <div className="space-y-6">
          <Card className="p-8 shadow-medium">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              College Results Dataset
              <ExternalLink className="h-5 w-5 text-muted-foreground" />
            </h2>
            <p className="text-muted-foreground mb-4">
              Our primary data source includes comprehensive information about colleges and universities across the United States.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Demographics:</strong> Student body composition, including Pell Grant recipients and underrepresented minorities</li>
              <li><strong>Outcomes:</strong> Graduation rates, retention rates, and completion statistics</li>
              <li><strong>Financial Data:</strong> Tuition, fees, and institutional aid information</li>
              <li><strong>Debt Metrics:</strong> Median student debt levels and default rates</li>
              <li><strong>Earnings Data:</strong> Median earnings of graduates 10 years after entry</li>
              <li><strong>Equity Indicators:</strong> Minority-Serving Institution (MSI) designations and support services</li>
            </ul>
          </Card>

          <Card className="p-8 shadow-medium">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              Affordability Gap Dataset
              <ExternalLink className="h-5 w-5 text-muted-foreground" />
            </h2>
            <p className="text-muted-foreground mb-4">
              This dataset helps us understand the true affordability of colleges for different student populations.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Net Price Analysis:</strong> Average cost after grants and scholarships by income level</li>
              <li><strong>Required Income:</strong> Estimated family income needed to afford attendance</li>
              <li><strong>Child-Care Adjusted Costs:</strong> Additional affordability considerations for student parents</li>
              <li><strong>Regional Cost Adjustments:</strong> State-by-state cost of living considerations</li>
              <li><strong>Financial Aid Effectiveness:</strong> How well institutions meet demonstrated financial need</li>
            </ul>
          </Card>

          <Card className="p-8 shadow-medium">
            <h2 className="text-2xl font-semibold mb-4">Data Quality & Updates</h2>
            <p className="text-muted-foreground mb-4">
              All data is sourced from official federal databases including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>U.S. Department of Education's College Scorecard</li>
              <li>Integrated Postsecondary Education Data System (IPEDS)</li>
              <li>National Student Loan Data System (NSLDS)</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Our database is updated annually to reflect the most recent available data.
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default DataSources;
