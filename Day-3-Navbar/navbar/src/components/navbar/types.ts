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