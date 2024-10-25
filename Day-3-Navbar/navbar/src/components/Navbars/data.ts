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
  BriefCase,
  CaseStudiesIcon,
  ChatIcon,
  ClipBoardCheck,
  ComparisonIcon,
  ConfiguratorsIcon,
  EditorGradientIcon,
  EventsIcon,
  FileCheck02,
  FileIcon,
  FileIcon02,
  Focus3Line,
  FounderChatsIcon,
  HandIcon,
  HeartHand,
  MedicalIcon,
  Phone,
  PlatformGradientIcon,
  PlayIcon,
  PodcastsIcon,
  RealEstateGradientIcon,
  RealEstateIcon,
  RendersIcon,
  RetailIcon,
  StoreFrontGradientIcon,
  ThreeDWalkthroughs,
  TourismIcon,
  Trophy,
  Users,
} from "./icons";

import {
  AboutDataItem,
  NavLink,
  ProductDataItem,
  ResourceCategory,
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

export const resourceData: ResourceCategory[] = [
  {
    id: uuidv4(),
    heading: "MORE RESOURCES",
    children: [
      {
        id: uuidv4(),
        title: "Documentation",
        description:
          "Information hub for integrations, asset library, syncing, asset panels, and more",
        icon: FileIcon,
        disabled: false,
      },
      {
        id: uuidv4(),
        title: "Product Comparison",
        description: "Ctruh vs Others: Which is best for your needs?",
        icon: ComparisonIcon,
        disabled: true,
      },
      {
        id: uuidv4(),
        title: "Case Studies",
        description:
          "Real-world impact of immersive experiences across industries",
        icon: CaseStudiesIcon,
        disabled: false,
      },
    ],
  },
  {
    id: uuidv4(),
    heading: "XR EXTRAVAGANZA",
    children: [
      {
        id: uuidv4(),
        title: "Podcasts",
        description:
          "Become an XR technology expert on-the-go with our Podcast",
        icon: PodcastsIcon,
        disabled: false,
      },
      {
        id: uuidv4(),
        title: "Events",
        description: "AR/VR meet-ups, workshops, webinars, and more",
        icon: EventsIcon,
        disabled: false,
      },
      {
        id: uuidv4(),
        title: "Founder’s Personal Notes",
        description: "Ctruh-verse:What we do, why we do it?",
        icon: FounderChatsIcon,
        disabled: true,
      },
    ],
  },
  {
    id: uuidv4(),
    heading: "LATEST FROM CTRUH",
    children: [
      {
        id: uuidv4(),
        title: "What is Virtual Reality?",
        description: "Create VR experiences on web",
        type: "youtube",
        image: "/images/navbar/142309a01ea664a12c62b88386e4253f_1.webp",
      },
      {
        id: uuidv4(),
        title: "The Future of 3D Design",
        description: "Tools to optimize your 3D workflow",
        image: "/images/navbar/532588594f9bc8417c60ea579ec7d2ec_1.webp",
        type: "article",
      },
      {
        id: uuidv4(),
        title: "Elevate Your 3D Portfolio",
        description: "Learn to create a cinematic portfolio",
        type: "newsletter",
        image: "/images/navbar/555a6b6b9d91a17acd57a05dc7269b0a.webp",
      },
    ],
  },
];

export const categoryLabels: { name: string; url: string }[] = [
  { name: "Blogs", url: "/resources/immersifyd/blogs" },
  { name: "NEWSLETTER", url: "/resources/immersifyd/newsletter" },
  { name: "E-BOOKS", url: "/resources/immersifyd/ebooks" },
];

export const aboutData: AboutDataItem[] = [
  {
    id: uuidv4(),
    heading: "COMPANY",
    children: [
      {
        id: uuidv4(),
        title: "About Us",
        icon: HandIcon,
        disabled: false,
        link: "/about/company/about-us",
      },
      {
        id: uuidv4(),
        title: "Mission Vision Values",
        icon: Focus3Line,
        disabled: false,
        link: "/about/company/mission-vision",
      },
      {
        id: uuidv4(),
        title: "Team",
        icon: Users,
        disabled: false,
        link: "/about/company/team",
      },
      {
        id: uuidv4(),
        title: "Contact Us",
        icon: Phone,
        disabled: false,
        link: "/about/company/contact-us",
      },
    ],
  },
  {
    id: uuidv4(),
    heading: "CAREERS",
    children: [
      {
        id: uuidv4(),
        title: "Values/Culture",
        icon: HeartHand,
        disabled: false,
        link: "/about/careers/values-and-culture",
      },
      {
        id: uuidv4(),
        title: "Openings",
        icon: BriefCase,
        disabled: false,
        link: "/about/careers/openings",
      },
    ],
  },

  {
    id: uuidv4(),
    heading: "PARTNER WITH US",
    gradientText: "Together, we’re Unstoppable!",
    buttonText: "Team Up",
    link: "/about/partner-with-us",
  },
  {
    id: uuidv4(),
    heading: "PRESS",
    children: [
      {
        id: uuidv4(),
        title: "Newsroom",
        icon: FileIcon02,
        disabled: false,
        link: "/",
      },
      {
        id: uuidv4(),
        title: "Openings",
        disabled: true,
        icon: Trophy,
        link: "/",
      },
    ],
  },
  {
    id: uuidv4(),
    heading: "TRUST CENTER",
    children: [
      {
        id: uuidv4(),
        title: "Compliance",
        icon: ClipBoardCheck,
        disabled: false,
        link: "/",
      },
    ],
  },
  {
    id: uuidv4(),
    heading: "LEGAL",
    children: [
      {
        id: uuidv4(),
        title: "Policies Document",
        icon: FileCheck02,
        disabled: false,
        link: "/privacy-policy",
      },
    ],
  },
];
