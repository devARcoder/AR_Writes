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
  { category: "Work", icon: Atom },
  { category: "Travel", icon: Plane },
  { category: "Technology", icon: Laptop },
  { category: "Business", icon: BriefcaseBusiness },
  { category: "Health", icon: Hospital },
  { category: "Finance", icon: Landmark },
  { category: "News", icon: Newspaper },
  { category: "Startup", icon: Building2 },
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
