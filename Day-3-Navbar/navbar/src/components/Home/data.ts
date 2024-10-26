import { ContentItem } from "./types";

export const tabs: string[] = ["3D Platform", "Virtual Storefront", "3D Editor"];

export const homeHeroTopText: ContentItem[] = [
  { type: "text", text: "Create Lifelike" },
  { type: "text", text: "3D Experiences", isHighlighted: true },
  { type: "text", text: "in Minutes" },
];

export const cardOneData = [
  {
    icon: "/icons/home/GlobalIcon.svg",
    title: "Global Reach",
    description: "Showcase your artwork to the right audience across the globe",
  },
  {
    icon: "/icons/home/CommunityValidation.svg",

    title: "Community-Driven",
    description: "Discover top 3D artists for freelance gigs or full-time roles",
  },
  {
    icon: "/icons/home/SocialMedia.svg",
    title: "Earn from Engagement",
    description: "Generate income from likes, comments, downloads and views",
  },
];

export const cardTwoData = [
  {
    title: "Select Layout",
    icon: "/icons/business/Model-Default.svg",
    hoverIcon: "/icons/business/Model-Hover.svg",
  },
  {
    title: "Upload Products",
    icon: "/icons/business/Setup-Default.svg",
    hoverIcon: "/icons/business/Setup-Hover.svg",
  },
  {
    title: "Add Branding",
    icon: "/icons/business/Branding-Default.svg",
    hoverIcon: "/icons/business/Branding-Hover.svg",
  },
  {
    title: "Place Products",
    icon: "/icons/business/Product-Default.svg",
    hoverIcon: "/icons/business/Product-Hover.svg",
  },
  {
    title: "Add Descriptions",
    icon: "/icons/business/Media-Default.svg",
    hoverIcon: "/icons/business/Media-Hover.svg",
  },
  {
    title: "Launch Storefront",
    icon: "/icons/business/Storefront-Default.svg",
    hoverIcon: "/icons/business/Storefront-Hover.svg",
    default: true,
  },
];

export const cardThreeData = ["No-code", "Low-code", "Web-based"];