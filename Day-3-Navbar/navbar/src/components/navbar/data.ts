import { v4 as uuidv4 } from "uuid";
import WhyCtruh from "./components/WhyCtruh";
import Products from "./components/Products";
import Solutions from "./components/Solutions";
import Resources from "./components/Resources";
import About from "./components/About";
import {
  AIStarGradientIcon,
  AnimationsIcon,
  ARDemosIcon,
  AutomotiveGradientIcon,
  AutomotiveIcon,
  ChatIcon,
  ConfiguratorsIcon,
  EditorGradientIcon,
  MedicalIcon,
  PlatformGradientIcon,
  PlayIcon,
  RealEstateGradientIcon,
  RealEstateIcon,
  RendersIcon,
  RetailIcon,
  StoreFrontGradientIcon,
  ThreeDWalkthroughs,
  TourismIcon,
} from "./icons";

import {
  NavLink,
  ProductDataItem,
  SocialCommunityItem,
  SolutionsData,
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

export const solutionsData: SolutionsData[] = [
  {
    id: uuidv4(),
    heading: "INDUSTRIES",
    children: [
      {
        id: uuidv4(),
        icon: RetailIcon,
        title: "Retail/E-Commerce",
        href: "/solutions/industries/retail",
      },
      {
        id: uuidv4(),
        icon: AutomotiveIcon,
        title: "Automotive",
        href: "/solutions/industries/automotive",
      },
      {
        id: uuidv4(),
        icon: RealEstateIcon,
        title: "Real Estate",
        href: "/solutions/industries/real-estate",
      },
      {
        id: uuidv4(),
        icon: TourismIcon,
        title: "Tourism",
        href: "/solutions/industries/tourism",
      },
      {
        id: uuidv4(),
        icon: MedicalIcon,
        title: "Healthcare",
        href: "/solutions/industries/medical",
      },
    ],
  },
  {
    id: uuidv4(),
    heading: "USECASES",
    children: [
      {
        id: uuidv4(),
        icon: ThreeDWalkthroughs,
        title: "3D Walkthroughs",
        description: "Boost customer engagement",
        href: "/solutions/usecases/3d-walkthrough",
      },
      {
        id: uuidv4(),
        icon: ARDemosIcon,
        title: "AR Demos",
        description: "Enhance purchase confidence",
        href: "/solutions/usecases/ar-demos",
      },
      {
        id: uuidv4(),
        icon: AnimationsIcon,
        title: "Animations",
        description: "Increase sales understanding",
        href: "/solutions/usecases/animations",
      },
      {
        id: uuidv4(),
        icon: ConfiguratorsIcon,
        title: "Configurators",
        description: "Drive customer satisfaction",
        href: "/solutions/usecases/configurators",
      },
      {
        id: uuidv4(),
        icon: RendersIcon,
        title: "Renders",
        description: "Improve conversion rate",
        href: "/solutions/usecases/renders",
      },
    ],
  },
  {
    id: uuidv4(),
    heading: "PEOPLE LOVE CTRUH",
    testimonials: [
      {
        id: uuidv4(),

        content:
          "Ctruh’s out of the world XR solutions brought our ideas to life like never before. Simply the best in business!",
        name: "Emily Rodriguez",
        role: "Founder",
        image: "/images/navbar/emily-rodriguez.png",
        company: "Company Name",
      },
      {
        id: uuidv4(),

        content: `With Ctruh, our brand now offers customers a virtual experience that sets us apart from the competition.`,
        name: "Samantha Taylor",
        role: "Founder",
        image: "/images/navbar/samantha-taylor.jpeg",
        company: "Company Name",
      },
      {
        id: uuidv4(),

        content: `Ctruh’s platform brought our ideas to life in ways we never imagined. The possibilities are endless!`,
        name: "Rajesh Kumar",
        role: "Founder",
        image: "/images/navbar/rajesh-kumar.jpeg",
        company: "Company Name",
      },
    ],
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
