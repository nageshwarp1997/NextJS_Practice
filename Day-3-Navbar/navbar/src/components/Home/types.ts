import { FC } from "react";

export interface TextItem {
  type: "text";
  text: string;
  isHighlighted?: boolean;
  break?: boolean;
}

interface IconItem {
  type: "icon";
  icon: FC<React.SVGProps<SVGSVGElement>> | null;
}

export type ContentItem = TextItem | IconItem;

export interface TopTextDisplayProps {
  content: ContentItem[];
  className?: string;
  contentClassName?: string;
}