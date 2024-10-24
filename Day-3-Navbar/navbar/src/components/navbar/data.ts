import { v4 as uuidv4 } from "uuid";
import WhyCtruh from "./components/WhyCtruh";
import Products from "./components/Products";
import Solutions from "./components/Solutions";
import Resources from "./components/Resources";
import About from "./components/About";
import { ChatIcon, PlayIcon } from "./icons";
import { NavLink, SocialCommunityItem, WhyCtruhDataItem } from "./types";


export const navLinks: NavLink[] = [
  { name: "Why Ctruh?", id: uuidv4(), component: WhyCtruh },
  { name: "Products", id: uuidv4(), component: Products },
  { name: "Solutions", id: uuidv4(), component: Solutions },
  { name: "Resources", id: uuidv4(), component: Resources },
  { name: "About", id: uuidv4(), component: About },
];

export const whyCtruhData: WhyCtruhDataItem[] = [
  {
    id: uuidv4(),
    heading: "For Creators",
    title: "CTRUH Platform",
    description: `Global marketplace for 3D artists. Craft. Connect. Collaborate. Monetize.`,
    image: "/images/navbar/Platform.webp",
    link: "/why-ctruh/for-creators",
  },
  {
    id: uuidv4(),
    heading: "FOR INDIVIDUALS",
    title: "CTRUH Editor",
    description: `Create expressive 3D scenes with no-code/low-code, web-based 3D Editor`,
    image: "/images/editor/EditorMainImage.png",
    link: "/why-ctruh/for-individuals",
  },
  {
    id: uuidv4(),
    heading: "FOR STARTUPS",
    title: "Tailored Experiences",
    description: `Tailored experiences for retail, real estate, automotive, healthcare, and more`,
    image: "/images/usecases/3D-Animation-Demo.webp",
    link: "/why-ctruh/for-startups",
  },
  {
    id: uuidv4(),
    heading: "FOR ENTERPRISES",
    title: "Ready Customizable Experiences",
    description: `Tailored experiences with customization and custom integrations`,
    image: "/images/navbar/Experiences.webp",
    link: "/why-ctruh/for-enterprises",
  },
];

export const socialCommunity: SocialCommunityItem[] = [
  {
    id: 1,
    icon: PlayIcon,
    label: "Watch Demo",
  },
  {
    id: 2,
    icon: ChatIcon,
    label: "Chat with our team",
  },
];