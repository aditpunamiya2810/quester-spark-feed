import { Button } from "@/components/ui/button";
import { MessageSquarePlus, Search, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <MessageSquarePlus className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-poppins font-bold text-foreground">
              AskHub
            </h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full pl-10 pr-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="hero" 
              size="sm" 
              className="hidden sm:flex"
              onClick={() => navigate('/ask')}
            >
              <MessageSquarePlus className="w-4 h-4 mr-2" />
              Ask Question
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/login')}
            >
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};