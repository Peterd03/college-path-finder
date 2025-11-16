import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useUserContext } from '@/app/contexts/UserContext';
import Layout from '@/app/components/Layout';
import { ArrowLeft, Target } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const IMPORTANCE_LABELS = ['Not Important', 'Slightly Important', 'Moderately Important', 'Very Important', 'Extremely Important'];

const Preferences = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { userInfo, preferences, setPreferences } = useUserContext();
  
  const [formData, setFormData] = useState(preferences);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPreferences(formData);
    
    // Mock API call - in production this would be a real POST request
    try {
      toast({
        title: "Generating recommendations...",
        description: "Please wait while we find your best matches.",
      });
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      navigate('/results');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate recommendations. Please try again.",
        variant: "destructive",
      });
    }
  };

  const renderSlider = (
    key: keyof typeof formData,
    label: string,
    description: string
  ) => (
    <div className="space-y-4">
      <div>
        <Label className="text-base font-semibold">{label}</Label>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
      <div className="space-y-3">
        <Slider
          value={[formData[key]]}
          onValueChange={(value) => setFormData({ ...formData, [key]: value[0] })}
          min={1}
          max={5}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          {IMPORTANCE_LABELS.map((label, index) => (
            <span 
              key={index} 
              className={`text-center flex-1 ${formData[key] === index + 1 ? 'text-primary font-semibold' : ''}`}
            >
              {index + 1}
            </span>
          ))}
        </div>
        <p className="text-sm text-center font-medium text-primary">
          {IMPORTANCE_LABELS[formData[key] - 1]}
        </p>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Set Your Priorities</h1>
          <p className="text-muted-foreground text-lg">
            Tell us what matters most to you in choosing a college
          </p>
        </div>

        <Card className="p-8 shadow-medium">
          <form onSubmit={handleSubmit} className="space-y-8">
            {renderSlider(
              'costImportance',
              'Keeping Yearly Cost Low',
              'How important is it to minimize annual tuition and fees?'
            )}

            {renderSlider(
              'earningsImportance',
              'Higher Income After Graduation',
              'How important are strong earnings 10 years after starting college?'
            )}

            {renderSlider(
              'gradRateImportance',
              'Graduating On Time',
              'How important is a high graduation rate and on-time completion?'
            )}

            {renderSlider(
              'debtImportance',
              'Keeping Student Debt Low',
              'How important is minimizing your total student loan burden?'
            )}

            {renderSlider(
              'equityImportance',
              'Equity-Focused Institution',
              'How important is attending a college with strong support for low-income and underrepresented students?'
            )}

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/about-you')}
                className="flex-1"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button type="submit" className="flex-1">
                <Target className="mr-2 h-4 w-4" />
                See My Matches
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export default Preferences;
