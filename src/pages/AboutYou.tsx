import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { useUserContext } from '@/contexts/UserContext';
import Layout from '@/components/Layout';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const US_STATES = [
  'No preference', 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN',
  'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK',
  'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

const MAJOR_GROUPS = [
  'Undecided',
  'STEM',
  'Business',
  'Health',
  'Education',
  'Social Sciences',
  'Arts and Humanities'
];

const AboutYou = () => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useUserContext();
  
  const [formData, setFormData] = useState(userInfo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserInfo(formData);
    navigate('/preferences');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Tell Us About Yourself</h1>
          <p className="text-muted-foreground text-lg">
            Help us understand your background and needs
          </p>
        </div>

        <Card className="p-8 shadow-medium">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* State/Region */}
            <div className="space-y-2">
              <Label htmlFor="state" className="text-base font-semibold">
                State or Region
              </Label>
              <Select
                value={formData.state}
                onValueChange={(value) => setFormData({ ...formData, state: value })}
              >
                <SelectTrigger id="state" className="w-full">
                  <SelectValue placeholder="Select a state" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  {US_STATES.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Degree Type */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Degree Type</Label>
              <RadioGroup
                value={formData.degreeType}
                onValueChange={(value: any) => setFormData({ ...formData, degreeType: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="4-year" id="4-year" />
                  <Label htmlFor="4-year" className="font-normal cursor-pointer">4-year degree</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="2-year" id="2-year" />
                  <Label htmlFor="2-year" className="font-normal cursor-pointer">2-year degree</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="not-sure" id="not-sure" />
                  <Label htmlFor="not-sure" className="font-normal cursor-pointer">Not sure</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Field of Study */}
            <div className="space-y-2">
              <Label htmlFor="major" className="text-base font-semibold">
                Intended Field of Study
              </Label>
              <Select
                value={formData.majorGroup}
                onValueChange={(value) => setFormData({ ...formData, majorGroup: value })}
              >
                <SelectTrigger id="major" className="w-full">
                  <SelectValue placeholder="Select a field" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  {MAJOR_GROUPS.map((major) => (
                    <SelectItem key={major} value={major}>
                      {major}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Student Parent */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Are you a student parent?</Label>
              <RadioGroup
                value={formData.isParent ? 'yes' : 'no'}
                onValueChange={(value) => setFormData({ ...formData, isParent: value === 'yes' })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="parent-yes" />
                  <Label htmlFor="parent-yes" className="font-normal cursor-pointer">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="parent-no" />
                  <Label htmlFor="parent-no" className="font-normal cursor-pointer">No</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Annual Budget */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-base font-semibold">Annual Budget</Label>
                <span className="text-lg font-semibold text-primary">
                  ${formData.budget.toLocaleString()}
                </span>
              </div>
              <Slider
                value={[formData.budget]}
                onValueChange={(value) => setFormData({ ...formData, budget: value[0] })}
                min={5000}
                max={40000}
                step={1000}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>$5,000</span>
                <span>$40,000</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/')}
                className="flex-1"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button type="submit" className="flex-1">
                Next: Your Priorities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export default AboutYou;
