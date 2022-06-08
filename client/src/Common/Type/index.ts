export interface RouterProps {
  component: () => JSX.Element;
}

export interface PositionType {
  x: number;
  y: number;
  z: number;
}

export interface BaseImageProps {
  url?: string;
  transform?: string;
  boxShadow?: string;
  width: string;
  height: string;
  left: string;
  top: string;
}

export interface InlineStyleType {
  [key: string]: string;
}

export interface ValueDataType {
  src: string;
  title: string;
  text: string[];
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
