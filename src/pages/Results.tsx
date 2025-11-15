import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import Layout from '@/components/Layout';
import { TrendingUp, DollarSign, GraduationCap, CreditCard, Award, Users } from 'lucide-react';

// Mock data
const MOCK_CLUSTERS = [
  { id: 1, label: "High-value public universities", avgROI: 3.4 },
  { id: 2, label: "Affordable regional colleges", avgROI: 3.1 },
  { id: 3, label: "Selective institutions with strong aid", avgROI: 3.8 },
];

const MOCK_COLLEGES = [
  {
    unit_id: 12345,
    name: "State University of California",
    state: "CA",
    cluster_id: 1,
    score: 0.92,
    net_price: 12000,
    earnings_10: 58000,
    median_debt: 14500,
    roi_index: 3.8,
    payback_years: 2.5,
    grad_rate: 0.72,
    pell_share: 0.42,
    urm_share: 0.48,
    is_msi: false
  },
  {
    unit_id: 12346,
    name: "Regional Technical College",
    state: "TX",
    cluster_id: 2,
    score: 0.88,
    net_price: 8500,
    earnings_10: 52000,
    median_debt: 11000,
    roi_index: 3.5,
    payback_years: 2.1,
    grad_rate: 0.65,
    pell_share: 0.55,
    urm_share: 0.52,
    is_msi: true
  },
  {
    unit_id: 12347,
    name: "Metropolitan University",
    state: "NY",
    cluster_id: 1,
    score: 0.85,
    net_price: 15000,
    earnings_10: 62000,
    median_debt: 18000,
    roi_index: 3.6,
    payback_years: 2.9,
    grad_rate: 0.68,
    pell_share: 0.38,
    urm_share: 0.45,
    is_msi: false
  },
  {
    unit_id: 12348,
    name: "Honors College of the Southwest",
    state: "AZ",
    cluster_id: 3,
    score: 0.94,
    net_price: 10000,
    earnings_10: 65000,
    median_debt: 12500,
    roi_index: 4.1,
    payback_years: 1.9,
    grad_rate: 0.78,
    pell_share: 0.48,
    urm_share: 0.51,
    is_msi: true
  },
];

type SortOption = 'recommended' | 'price' | 'roi' | 'grad-rate';

const Results = () => {
  const [sortBy, setSortBy] = useState<SortOption>('recommended');
  const [showPublicOnly, setShowPublicOnly] = useState(false);
  const [showStateOnly, setShowStateOnly] = useState(false);
  const [minROI, setMinROI] = useState([0]);

  const sortedColleges = [...MOCK_COLLEGES].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.net_price - b.net_price;
      case 'roi':
        return b.roi_index - a.roi_index;
      case 'grad-rate':
        return b.grad_rate - a.grad_rate;
      default:
        return b.score - a.score;
    }
  });

  const filteredColleges = sortedColleges.filter(college => {
    if (minROI[0] > 0 && college.roi_index < minROI[0]) return false;
    return true;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Your College Matches</h1>
          <p className="text-muted-foreground text-lg">
            Based on your preferences, here are the best colleges for you
          </p>
        </div>

        {/* Cluster Suggestions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Recommended College Types</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {MOCK_CLUSTERS.map((cluster) => (
              <Card key={cluster.id} className="p-6 shadow-soft hover:shadow-medium transition-shadow">
                <h3 className="font-semibold text-lg mb-2">{cluster.label}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span>Avg ROI: {cluster.avgROI.toFixed(1)}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Filters and Sort */}
        <section className="mb-8">
          <Card className="p-6 shadow-soft">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Sort By</label>
                <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
                  <SelectTrigger className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="price">Lowest Net Price</SelectItem>
                    <SelectItem value="roi">Highest ROI</SelectItem>
                    <SelectItem value="grad-rate">Highest Graduation Rate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Filter Options</label>
                <div className="flex gap-2">
                  <Button
                    variant={showPublicOnly ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowPublicOnly(!showPublicOnly)}
                  >
                    Public Only
                  </Button>
                  <Button
                    variant={showStateOnly ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowStateOnly(!showStateOnly)}
                  >
                    My State
                  </Button>
                </div>
              </div>

              <div className="space-y-2 lg:col-span-2">
                <label className="text-sm font-medium">Minimum ROI Index: {minROI[0].toFixed(1)}</label>
                <Slider
                  value={minROI}
                  onValueChange={setMinROI}
                  min={0}
                  max={5}
                  step={0.1}
                  className="w-full"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* College Cards */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            {filteredColleges.length} Colleges Found
          </h2>
          <div className="grid gap-6">
            {filteredColleges.map((college) => (
              <Card key={college.unit_id} className="p-6 shadow-soft hover:shadow-medium transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{college.name}</h3>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="secondary">{college.state}</Badge>
                          <Badge variant="outline">
                            {MOCK_CLUSTERS.find(c => c.id === college.cluster_id)?.label}
                          </Badge>
                          {college.is_msi && (
                            <Badge className="bg-success text-success-foreground">MSI</Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Net Price</p>
                          <p className="font-semibold">${college.net_price.toLocaleString()}/yr</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-success" />
                        <div>
                          <p className="text-xs text-muted-foreground">Earnings (10yr)</p>
                          <p className="font-semibold">${college.earnings_10.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5 text-accent" />
                        <div>
                          <p className="text-xs text-muted-foreground">Median Debt</p>
                          <p className="font-semibold">${college.median_debt.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-secondary" />
                        <div>
                          <p className="text-xs text-muted-foreground">ROI Index</p>
                          <p className="font-semibold">{college.roi_index.toFixed(1)}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Graduation Rate</p>
                          <p className="font-semibold">{(college.grad_rate * 100).toFixed(0)}%</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-secondary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Pell Share</p>
                          <p className="font-semibold">{(college.pell_share * 100).toFixed(0)}%</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:text-right">
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Payback Time</p>
                      <p className="text-2xl font-bold text-primary">{college.payback_years.toFixed(1)} years</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Results;
