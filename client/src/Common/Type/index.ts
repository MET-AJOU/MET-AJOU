export interface RouterProps {
  component: () => JSX.Element;
}

export interface PositionType {
  x: number;
  y: number;
  z: number;
}

export interface InlineStyleType {
  [key: string]: string;
}

export interface ChanelInfoType {
  id: number;
  title: string;
  src: string;
  total: number;
}

export interface MiniMapPinType {
  building: string;
  path: string;
  info?: string;
  bubble?: number;
  video?: string;
}
