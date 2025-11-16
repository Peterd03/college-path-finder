import { Link, useLocation } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors">
              <GraduationCap className="h-7 w-7 text-primary" />
              <span>College ROI Navigator</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link 
                to="/about" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === '/about' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                About
              </Link>
              <Link 
                to="/data-sources" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === '/data-sources' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Data Sources
              </Link>
              <Link 
                to="/contact" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === '/contact' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border bg-muted/30 mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GraduationCap className="h-5 w-5" />
              <span>© 2024 College ROI Navigator</span>
            </div>
            <div className="flex gap-6">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/data-sources" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Data Sources
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
