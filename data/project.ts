export type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Movie Recommender",
    description:
      "A modern movie and web-series recommendation website with genre filters, ratings, trailer support, and responsive UI.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900&auto=format&fit=crop",
    github: "https://github.com/Puskar10/Movie-recommender",
    live: "https://movie-recommender-six-livid.vercel.app/",
    tags: ["Next.js", "TypeScript", "API", "Tailwind"],
  },
  {
    title: "Jarvis AI Chatbot",
    description:
      "An AI chatbot with memory, chat history, voice features, and a clean modern chat interface.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&auto=format&fit=crop",
    github: "https://github.com/Puskar10/jarvis-ai-chatbot",
    live: "https://jarvis-ai-chatbot-delta.vercel.app/",
    tags: ["React", "Node.js", "MongoDB", "AI"],
  },
  {
    title: "BlueMeet",
    description:
      "A real-time one-to-one video calling and messaging app built with WebRTC, Socket.IO, React, Node.js, and Express.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&auto=format&fit=crop",
    github: "https://github.com/Puskar10/BlueMeet",
    live: "https://blue-meet.vercel.app/",
    tags: ["React", "WebRTC", "Socket.IO", "Node.js"],
  },
  {
    title: "Shortly",
    description:
      "A modern URL shortener app with authentication, MongoDB storage, short link redirection, and QR code support.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&auto=format&fit=crop",
    github: "https://github.com/Puskar10/Shortly",
    live: "https://shortly-nu-orcin.vercel.app/",
    tags: ["Next.js", "MongoDB", "NextAuth", "URL Shortener"],
  },
  {
    title: "Real-Time Chat App",
    description:
      "A real-time chat application with login flow and instant messaging using React and Socket.IO.",
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=900&auto=format&fit=crop",
    github: "https://github.com/Puskar10/Chat-App",
    live: "https://chat-app-tau-steel-63.vercel.app/login",
    tags: ["React", "Socket.IO", "Node.js", "Chat App"],
  },
  {
    title: "Gym Website",
    description:
      "A responsive fitness website built with React, Vite, Tailwind CSS, and smooth Framer Motion animations.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&auto=format&fit=crop",
    github: "https://github.com/Puskar10/gym-website-react",
    live: "https://gym-website-react-omega.vercel.app/",
    tags: ["React", "Vite", "Tailwind", "Framer Motion"],
  },
  {
    title: "Password Manager",
    description:
      "A password manager web app for storing and managing login credentials with a clean user interface.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&auto=format&fit=crop",
    github: "https://github.com/Puskar10/Password-Maneger",
    live: "https://password-maneger-ten.vercel.app/",
    tags: ["React", "JavaScript", "Security", "Password Manager"],
  },
  {
    title: "AI Text to PPT",
    description:
      "An AI-powered presentation generator that creates slide decks from text prompts with modern templates.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop",
    github: "https://github.com/Puskar10/Ai-TEXT-to-PPT",
    live: "#",
    tags: ["AI", "TypeScript", "Presentation", "SaaS"],
  },
  {
    title: "PivotIQ",
    description:
      "A modern business/analytics-style website with a clean responsive layout, professional UI, and smooth user experience.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop",
    github: "https://github.com/Puskar10/Consulting-Firm",
    live: "https://pivotiq.netlify.app/",
    tags: ["React", "Tailwind", "Responsive", "Business"],
  },
  {
    title: "DAS Enterprise",
    description:
      "A professional enterprise/business website designed with a clean layout, modern sections, and responsive design.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop",
    github: "https://github.com/Puskar10",
    live: "https://dasenterprise.netlify.app/",
    tags: ["React", "Tailwind", "Business", "Landing Page"],
  },
];