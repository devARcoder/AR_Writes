import {
  Atom,
  BriefcaseBusiness,
  Drama,
  Hospital,
  Laptop,
  Microscope,
  Trophy,
} from "lucide-react";

export const exploreTopicsData = [
  { category: "General", icon: Atom },
  { category: "Business", icon: BriefcaseBusiness },
  { category: "Technology", icon: Laptop },
  { category: "Sports", icon: Trophy },
  { category: "Entertainment", icon: Drama },
  { category: "Health", icon: Hospital },
  { category: "Science", icon: Microscope },
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
    twitter: "https://twitter.com/jonathanblake",
    linkedin: "https://www.linkedin.com/in/jonathanblake",
    github: "https://github.com/devarcoder",
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
