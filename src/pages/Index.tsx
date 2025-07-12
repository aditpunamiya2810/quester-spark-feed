import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { QuestionCard } from "@/components/QuestionCard";
import { AskQuestionCard } from "@/components/AskQuestionCard";
import { mockQuestions, type Question } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, ThumbsUp, MessageSquarePlus } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>(mockQuestions);
  const [sortBy, setSortBy] = useState<"trending" | "recent" | "popular">("trending");

  const handleLike = (questionId: string) => {
    setQuestions(prev => 
      prev.map(q => 
        q.id === questionId 
          ? { 
              ...q, 
              likes: q.isLiked ? q.likes - 1 : q.likes + 1,
              dislikes: q.isDisliked ? q.dislikes - 1 : q.dislikes,
              isLiked: !q.isLiked,
              isDisliked: false
            }
          : q
      )
    );
  };

  const handleDislike = (questionId: string) => {
    setQuestions(prev => 
      prev.map(q => 
        q.id === questionId 
          ? { 
              ...q, 
              dislikes: q.isDisliked ? q.dislikes - 1 : q.dislikes + 1,
              likes: q.isLiked ? q.likes - 1 : q.likes,
              isDisliked: !q.isDisliked,
              isLiked: false
            }
          : q
      )
    );
  };

  const handleAnswer = (questionId: string) => {
    navigate(`/question/${questionId}`);
  };

  const handleAskAI = (questionId: string) => {
    navigate(`/question/${questionId}`);
  };

  const sortedQuestions = [...questions].sort((a, b) => {
    switch (sortBy) {
      case "recent":
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      case "popular":
        return (b.likes - b.dislikes) - (a.likes - a.dislikes);
      default: // trending
        return (b.likes + b.answers) - (a.likes + a.answers);
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Ask Question Card */}
          <AskQuestionCard />

          {/* Filter Buttons */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-poppins font-bold text-foreground">
              Questions
            </h2>
            <div className="flex items-center space-x-2">
              <Button
                variant={sortBy === "trending" ? "default" : "outline"}
                size="sm"
                onClick={() => setSortBy("trending")}
              >
                <TrendingUp className="w-4 h-4 mr-1" />
                Trending
              </Button>
              <Button
                variant={sortBy === "recent" ? "default" : "outline"}
                size="sm"
                onClick={() => setSortBy("recent")}
              >
                <Clock className="w-4 h-4 mr-1" />
                Recent
              </Button>
              <Button
                variant={sortBy === "popular" ? "default" : "outline"}
                size="sm"
                onClick={() => setSortBy("popular")}
              >
                <ThumbsUp className="w-4 h-4 mr-1" />
                Popular
              </Button>
            </div>
          </div>

          {/* Questions Feed */}
          <div className="space-y-4">
            {sortedQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                onLike={() => handleLike(question.id)}
                onDislike={() => handleDislike(question.id)}
                onAnswer={() => handleAnswer(question.id)}
                onAskAI={() => handleAskAI(question.id)}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center pt-8">
            <Button variant="outline" size="lg">
              Load More Questions
            </Button>
          </div>
        </div>
      </main>

      {/* Floating Action Button for Mobile */}
      <button 
        className="fab sm:hidden"
        onClick={() => navigate('/ask')}
      >
        <MessageSquarePlus className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Index;
