import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ThumbsUp, ThumbsDown, MessageCircle, Zap, User, ArrowLeft, Send, Bot } from "lucide-react";

const QuestionDetail = () => {
  const [newAnswer, setNewAnswer] = useState("");
  const [showAIAnswer, setShowAIAnswer] = useState(false);

  // Mock data for demonstration
  const question = {
    id: "1",
    title: "How to implement React Context with TypeScript?",
    description: "I'm trying to create a global state management solution using React Context API with TypeScript. I'm getting type errors when trying to access the context values in my components. What's the best way to type React Context properly? I've tried several approaches but keep running into issues with the provider and consumer types.",
    tags: ["React", "TypeScript", "Context API", "State Management"],
    likes: 24,
    dislikes: 2,
    answers: 8,
    author: "Sarah Chen",
    timestamp: "2 hours ago",
    isLiked: false,
    isDisliked: false
  };

  const answers = [
    {
      id: "1",
      content: "The key is to properly type your context. Here's a complete example:\n\n```typescript\ninterface AppContextType {\n  user: User | null;\n  setUser: (user: User | null) => void;\n}\n\nconst AppContext = createContext<AppContextType | undefined>(undefined);\n\nexport const useAppContext = () => {\n  const context = useContext(AppContext);\n  if (context === undefined) {\n    throw new Error('useAppContext must be used within an AppProvider');\n  }\n  return context;\n};\n```\n\nThis approach ensures type safety and prevents undefined context usage.",
      author: "Alex Rodriguez",
      timestamp: "1 hour ago",
      likes: 12,
      dislikes: 0,
      isLiked: true,
      isAccepted: true
    },
    {
      id: "2", 
      content: "Another approach is to use a custom hook pattern with a reducer for more complex state:\n\n```typescript\ntype State = {\n  count: number;\n  user: User | null;\n};\n\ntype Action = \n  | { type: 'INCREMENT' }\n  | { type: 'SET_USER'; payload: User };\n\nconst StateContext = createContext<{\n  state: State;\n  dispatch: Dispatch<Action>;\n} | null>(null);\n```",
      author: "Maria Garcia",
      timestamp: "45 minutes ago", 
      likes: 8,
      dislikes: 1,
      isLiked: false,
      isAccepted: false
    }
  ];

  const aiAnswer = `Based on your question about implementing React Context with TypeScript, here's a comprehensive solution:

**1. Define Your Context Type Interface**
First, create a clear interface for your context:

\`\`\`typescript
interface AppContextType {
  user: User | null;
  theme: 'light' | 'dark';
  setUser: (user: User | null) => void;
  toggleTheme: () => void;
}
\`\`\`

**2. Create the Context with Default Value**
\`\`\`typescript
const AppContext = createContext<AppContextType | undefined>(undefined);
\`\`\`

**3. Custom Hook for Type Safety**
\`\`\`typescript
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
\`\`\`

**4. Provider Component**
\`\`\`typescript
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const value: AppContextType = {
    user,
    theme,
    setUser,
    toggleTheme
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
\`\`\`

This pattern ensures full type safety and prevents runtime errors from undefined context usage.`;

  const handleSubmitAnswer = () => {
    if (newAnswer.trim()) {
      console.log("Submit answer:", newAnswer);
      setNewAnswer("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Button variant="ghost" className="mb-6" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Questions
          </Button>

          {/* Question */}
          <Card className="p-8 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <User className="w-4 h-4" />
                <span>{question.author}</span>
                <span>•</span>
                <span>{question.timestamp}</span>
              </div>
            </div>

            <h1 className="text-2xl font-poppins font-bold text-foreground mb-4">
              {question.title}
            </h1>

            <div className="prose prose-gray max-w-none mb-6">
              <p className="text-foreground leading-relaxed whitespace-pre-line">
                {question.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {question.tags.map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Question Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Button variant="like" size="sm">
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  {question.likes}
                </Button>
                <Button variant="dislike" size="sm">
                  <ThumbsDown className="w-4 h-4 mr-1" />
                  {question.dislikes}
                </Button>
                <div className="flex items-center text-muted-foreground">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  <span className="text-sm">{question.answers} answers</span>
                </div>
              </div>

              <Button 
                variant="secondary" 
                size="sm" 
                onClick={() => setShowAIAnswer(!showAIAnswer)}
              >
                <Zap className="w-4 h-4 mr-1" />
                {showAIAnswer ? "Hide AI Answer" : "Ask AI"}
              </Button>
            </div>
          </Card>

          {/* AI Answer */}
          {showAIAnswer && (
            <Card className="p-6 mb-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-foreground">AI Generated Answer</h3>
                  <p className="text-xs text-muted-foreground">Generated by AI • Always verify with official documentation</p>
                </div>
              </div>
              <div className="prose prose-gray max-w-none">
                <div className="text-foreground leading-relaxed whitespace-pre-line">
                  {aiAnswer}
                </div>
              </div>
            </Card>
          )}

          {/* Answers Section */}
          <div className="mb-8">
            <h2 className="text-xl font-poppins font-bold text-foreground mb-4">
              {answers.length} Answers
            </h2>

            <div className="space-y-6">
              {answers.map((answer) => (
                <Card key={answer.id} className={`p-6 ${answer.isAccepted ? 'border-success bg-success/5' : ''}`}>
                  {answer.isAccepted && (
                    <div className="flex items-center space-x-2 mb-3">
                      <ThumbsUp className="w-4 h-4 text-success" />
                      <span className="text-sm font-medium text-success">Accepted Answer</span>
                    </div>
                  )}

                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                    <User className="w-4 h-4" />
                    <span>{answer.author}</span>
                    <span>•</span>
                    <span>{answer.timestamp}</span>
                  </div>

                  <div className="prose prose-gray max-w-none mb-4">
                    <div className="text-foreground leading-relaxed whitespace-pre-line">
                      {answer.content}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Button variant={answer.isLiked ? "success" : "like"} size="sm">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {answer.likes}
                    </Button>
                    <Button variant="dislike" size="sm">
                      <ThumbsDown className="w-4 h-4 mr-1" />
                      {answer.dislikes}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Answer Form */}
          <Card className="p-6">
            <h3 className="text-lg font-poppins font-semibold text-foreground mb-4">
              Your Answer
            </h3>
            <div className="space-y-4">
              <Textarea
                placeholder="Write your answer here... Be sure to answer the question. Provide details and share your research!"
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                className="min-h-[150px]"
              />
              <div className="flex justify-end">
                <Button 
                  variant="hero" 
                  onClick={handleSubmitAnswer}
                  disabled={!newAnswer.trim()}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Post Answer
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default QuestionDetail;