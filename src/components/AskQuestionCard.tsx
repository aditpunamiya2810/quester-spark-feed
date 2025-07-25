import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageSquarePlus, Tag, X } from "lucide-react";

export const AskQuestionCard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim()) && tags.length < 5) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleSubmit = () => {
    if (title.trim() && description.trim()) {
      // Handle form submission
      console.log({ title, description, tags });
      // Reset form
      setTitle("");
      setDescription("");
      setTags([]);
    }
  };

  return (
    <Card className="p-6 bg-gradient-card border-primary/20 shadow-elevated">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
          <MessageSquarePlus className="w-4 h-4 text-white" />
        </div>
        <h2 className="text-lg font-poppins font-semibold text-foreground">
          Ask a Question
        </h2>
      </div>

      <div className="space-y-4">
        {/* Title Input */}
        <div>
          <Input
            placeholder="What's your question? Be specific and clear..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-base font-medium"
          />
        </div>

        {/* Description */}
        <div>
          <Textarea
            placeholder="Provide more details about your question. Include context, what you've tried, and what you're expecting..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-[100px] resize-none"
          />
        </div>

        {/* Tags */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <Tag className="w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Add tags (press Enter)"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button variant="outline" size="sm" onClick={handleAddTag}>
              Add
            </Button>
          </div>
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
                >
                  {tag}
                  <button
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-1 hover:text-destructive"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button 
            variant="hero" 
            onClick={handleSubmit}
            disabled={!title.trim() || !description.trim()}
          >
            <MessageSquarePlus className="w-4 h-4 mr-2" />
            Post Question
          </Button>
        </div>
      </div>
    </Card>
  );
};