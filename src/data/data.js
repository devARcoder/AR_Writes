import {
  Atom,
  BriefcaseBusiness,
  Newspaper,
  Hospital,
  Laptop,
  Building2,
  Landmark,
  Plane,
} from "lucide-react";

export const exploreTopicsData = [
  { category: "Work", to: "/work", icon: Atom },
  { category: "Travel", to: "/travel", icon: Plane },
  { category: "Technology", to: "/technology", icon: Laptop },
  { category: "Business", to: "/business", icon: BriefcaseBusiness },
  { category: "Health", to: "/health", icon: Hospital },
  { category: "Finance", to: "/finance", icon: Landmark },
  { category: "News", to: "/news", icon: Newspaper },
  { category: "Startup", to: "/startup", icon: Building2 },
];

export const topRatedAuthor = {
  id: 1,
  avatar: "/images/profile.png",
  name: "Abdur Razzaq",
  field: "The Frontend dev | Personal Blogs",
  intro: "I write about cutting-edge web technologies, AI trends, and best practices for developers.",
  location: {
    country: "Pakistan",
    city: "Peshawar",
  },
  socialLinks: {
    
    linkedin: "https://www.linkedin.com/in/abdur-razzaq-8b569a335/",
    github: "https://github.com/devARcoder",
    website: "https://devarcoder.vercel.app/"
  }
};

export const featuredPostData = {
  id: 1,
  category: "React js",
  title: "The AR electro store where you can add cart and wishlist products",
  author: "Abdur Razzaq",
  date: "July 25, 2025",
  coverImage: "/images/featurePost.jpg",
  excerpt:
    "Explore how AI is revolutionizing industries, from automation to predictive analytics. Discover what trends to watch for in the next decade.",
};



  export const whyBlogExists = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "No Fluff, Just Value",
      description: "I share only tested strategies and real-world insights."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Learn From My Journey",
      description: "Failures, wins, and authentic life lessons shared openly."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Future Community Hub",
      description: "Connecting passionate readers and creators worldwide."
    }
  ];

  export const blogTopics = [
    { icon: <Briefcase className="w-6 h-6" />, title: "Work", color: "from-blue-500 to-blue-600" },
    { icon: <Plane className="w-6 h-6" />, title: "Travel", color: "from-emerald-500 to-emerald-600" },
    { icon: <Laptop className="w-6 h-6" />, title: "Tech", color: "from-purple-500 to-purple-600" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Finance", color: "from-green-500 to-green-600" },
    { icon: <Heart className="w-6 h-6" />, title: "Health", color: "from-pink-500 to-pink-600" },
    { icon: <Zap className="w-6 h-6" />, title: "Startups", color: "from-orange-500 to-orange-600" },
    { icon: <Newspaper className="w-6 h-6" />, title: "News", color: "from-red-500 to-red-600" },
    { icon: <Target className="w-6 h-6" />, title: "Personal Growth", color: "from-indigo-500 to-indigo-600" }
  ];

