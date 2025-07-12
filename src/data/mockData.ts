export interface Question {
  id: string;
  title: string;
  description: string;
  tags: string[];
  likes: number;
  dislikes: number;
  answers: number;
  author: string;
  timestamp: string;
  isLiked?: boolean;
  isDisliked?: boolean;
}

export const mockQuestions: Question[] = [
  {
    id: "1",
    title: "How to implement React Context with TypeScript?",
    description: "I'm trying to create a global state management solution using React Context API with TypeScript. I'm getting type errors when trying to access the context values in my components. What's the best way to type React Context?",
    tags: ["React", "TypeScript", "Context API", "State Management"],
    likes: 24,
    dislikes: 2,
    answers: 8,
    author: "Sarah Chen",
    timestamp: "2 hours ago",
    isLiked: false,
    isDisliked: false
  },
  {
    id: "2", 
    title: "Best practices for MongoDB schema design?",
    description: "I'm designing a database schema for a social media application. Should I embed user data in posts or reference them? What are the trade-offs between embedding and referencing in MongoDB?",
    tags: ["MongoDB", "Database Design", "NoSQL", "Schema"],
    likes: 18,
    dislikes: 1,
    answers: 12,
    author: "Alex Rodriguez",
    timestamp: "5 hours ago",
    isLiked: true,
    isDisliked: false
  },
  {
    id: "3",
    title: "Why is my FastAPI endpoint returning 422 errors?",
    description: "I have a FastAPI endpoint that accepts POST requests with JSON data. It works fine in development but returns 422 Unprocessable Entity errors in production. The request body validation seems to be failing.",
    tags: ["FastAPI", "Python", "API", "Validation", "422 Error"],
    likes: 15,
    dislikes: 0,
    answers: 6,
    author: "Michael Kim",
    timestamp: "1 day ago",
    isLiked: false,
    isDisliked: false
  },
  {
    id: "4",
    title: "How to optimize React app performance?",
    description: "My React application is becoming slow as it grows. I have many components re-rendering unnecessarily. What are the best techniques to optimize React performance? Should I use React.memo everywhere?",
    tags: ["React", "Performance", "Optimization", "Memoization"],
    likes: 32,
    dislikes: 3,
    answers: 15,
    author: "Emma Thompson",
    timestamp: "2 days ago",
    isLiked: false,
    isDisliked: false
  },
  {
    id: "5",
    title: "Difference between REST and GraphQL APIs?",
    description: "I'm building a new web application and need to decide between REST and GraphQL for my API. What are the main differences, pros and cons of each approach? When should I choose one over the other?",
    tags: ["REST", "GraphQL", "API Design", "Web Development"],
    likes: 41,
    dislikes: 5,
    answers: 22,
    author: "David Wilson",
    timestamp: "3 days ago",
    isLiked: true,
    isDisliked: false
  },
  {
    id: "6",
    title: "How to handle authentication in Next.js 14?",
    description: "I'm working with Next.js 14 app router and need to implement user authentication. Should I use NextAuth.js or build a custom solution? What's the best approach for protecting routes and managing user sessions?",
    tags: ["Next.js", "Authentication", "NextAuth", "App Router"],
    likes: 28,
    dislikes: 1,
    answers: 11,
    author: "Lisa Park",
    timestamp: "4 days ago",
    isLiked: false,
    isDisliked: false
  }
];