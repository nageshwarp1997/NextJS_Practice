import { ReactElement } from "react";

type IconType = React.FC<React.SVGProps<SVGSVGElement>>;

export interface NavLink {
  id: string;
  name: string;
  component: React.ElementType;
}

export interface HoveredContentProps {
  hoveredIndex: number | null;
}

export interface SocialCommunityItem {
  id: number | string;
  icon: IconType;
  label: string;
}

export interface WhyCtruhDataItem {
  id: string;
  heading: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ProductDataChild {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.FC<{ className: string }>;
}

export interface ProductDataItem {
  id: string;
  heading: string;
  children?: ProductDataChild[];
  image?: string;
}

interface SolutionsChildItem {
  id: string;
  icon: IconType;
  title: string;
  description?: string;
  href: string;
}

export interface Testimonial {
  id: string;
  content: string;
  name: string;
  role: string;
  image: string;
  company: string;
}

export interface SolutionsData {
  id: string;
  heading: string;
  children?: SolutionsChildItem[];
  testimonials?: Testimonial[];
}

interface ResourceChildren {
  id: string;
  title: string;
  description: string;
  icon?: IconType;
  disabled?: boolean;
  type?: string;
  image?: string;
}

export interface ResourceCategory {
  id: string;
  heading: string;
  children: ResourceChildren[];
}

interface AboutDataChild {
  id: string;
  title: string;
  icon: IconType;
  disabled: boolean;
  link: string;
}

export interface AboutDataItem {
  id: string;
  heading: string;
  gradientText?: string;
  buttonText?: string;
  children?: AboutDataChild[];
  link?: string;
}

export interface ButtonTypes {
  content: string;
  type?: "primary" | "solid" | "outline";
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
  id?: string;
  wrapperClassName?: string;
  className?: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  loadingContent?: ReactElement;
  submit?: boolean;
  disabled?: boolean;
}