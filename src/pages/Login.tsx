import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquarePlus, Chrome, Github, Lock } from "lucide-react";

const Login = () => {
  const handleGoogleLogin = () => {
    console.log("Google OAuth login");
  };

  const handleGithubLogin = () => {
    console.log("GitHub OAuth login");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="p-8 shadow-elevated">
            {/* Logo and Title */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageSquarePlus className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-poppins font-bold text-foreground mb-2">
                Welcome to AskHub
              </h1>
              <p className="text-muted-foreground">
                Join our community to ask questions and share knowledge
              </p>
            </div>

            {/* Login Options */}
            <div className="space-y-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full h-12"
                onClick={handleGoogleLogin}
              >
                <Chrome className="w-5 h-5 mr-3" />
                Continue with Google
              </Button>

              <Button 
                variant="outline" 
                size="lg" 
                className="w-full h-12"
                onClick={handleGithubLogin}
              >
                <Github className="w-5 h-5 mr-3" />
                Continue with GitHub
              </Button>
            </div>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-border"></div>
              <span className="px-4 text-sm text-muted-foreground">or</span>
              <div className="flex-1 border-t border-border"></div>
            </div>

            {/* Demo Login */}
            <Button variant="hero" size="lg" className="w-full h-12">
              <Lock className="w-5 h-5 mr-3" />
              Continue as Demo User
            </Button>

            {/* Features */}
            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="font-poppins font-semibold text-foreground mb-3">
                What you can do:
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Ask questions and get answers
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Vote on questions and answers
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Get AI-powered instant answers
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  Build your reputation in the community
                </li>
              </ul>
            </div>

            {/* Terms */}
            <p className="text-xs text-muted-foreground text-center mt-6">
              By continuing, you agree to our{" "}
              <a href="#" className="text-primary hover:underline">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="text-primary hover:underline">Privacy Policy</a>
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Login;