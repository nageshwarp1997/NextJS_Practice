import { v4 as uuidv4 } from "uuid";
import WhyCtruh from "./components/WhyCtruh";
import Products from "./components/Products";
import Solutions from "./components/Solutions";
import Resources from "./components/Resources";
import About from "./components/About";
import {
  AIStarGradientIcon,
  AutomotiveGradientIcon,
  ChatIcon,
  EditorGradientIcon,
  PlatformGradientIcon,
  PlayIcon,
  RealEstateGradientIcon,
  StoreFrontGradientIcon,
} from "./icons";

import {
  NavLink,
  ProductDataItem,
  SocialCommunityItem,
  WhyCtruhDataItem,
} from "./types";

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

export const productData: ProductDataItem[] = [
  {
    id: uuidv4(),
    heading: "FOR INDIVIDUALS",
    children: [
      {
        id: uuidv4(),
        title: "CTRUH EDITOR",
        description: `Create 3D scenes with no-code/ low-code, web-based 3D Editor`,
        icon: EditorGradientIcon,
        href: "/products/individuals/ctruh-editor",
      },
      {
        id: uuidv4(),
        title: "CTRUH PLATFORM",
        description: `Craft, connect, and share—the ultimate platform for 3D content`,
        icon: PlatformGradientIcon,
        href: "/products/individuals/ctruh-platform",
      },
      {
        id: uuidv4(),
        title: "VERSA AI",
        description: `Text-to-3D and Image-to-3D creation, powered by our Generative AI, Versa AI`,
        icon: AIStarGradientIcon,
        href: "https://versa-ai.ctruh.org",
      },
    ],
  },
  {
    id: uuidv4(),
    heading: "FOR BUSINESSES",
    children: [
      {
        id: uuidv4(),
        title: "Immersive Virtual Storefronts",
        description: `6 simple steps to build your virtual store in minutes.`,
        icon: StoreFrontGradientIcon,
        href: "/business/store-front",
      },
      {
        id: uuidv4(),
        title: "Immersive Real Estate Tour",
        description: `Make customizable and interactive immersive property experiences`,
        icon: RealEstateGradientIcon,
        href: "/business/real-estate",
      },
      {
        id: uuidv4(),
        title: "Virtual Automotive Showroom",
        description: `Create customizable immersive automotive experiences in 5 simple steps`,
        icon: AutomotiveGradientIcon,
        href: "/business/automotive",
      },
    ],
  },
  {
    id: uuidv4(),
    heading: "METAVERSE AS A SERVICE",
    image: "/images/navbar/MaasCard.webp",
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
