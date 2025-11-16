import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./app/contexts/UserContext";
import Landing from "./app/pages/Landing";
import AboutYou from "./app/pages/AboutYou";
import Preferences from "./app/pages/Preferences";
import Results from "./app/pages/Results";
import About from "./app/pages/About";
import DataSources from "./app/pages/DataSources";
import Contact from "./app/pages/Contact";
import NotFound from "./app/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UserProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about-you" element={<AboutYou />} />
            <Route path="/preferences" element={<Preferences />} />
            <Route path="/results" element={<Results />} />
            <Route path="/about" element={<About />} />
            <Route path="/data-sources" element={<DataSources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
