export interface NavLink {
  id: string;
  name: string;
  component: React.ElementType;
}

export interface HoveredContentProps {
  hoveredIndex: number | null;
}