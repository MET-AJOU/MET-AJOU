export interface RouterProps {
  component: () => JSX.Element;
}

interface BasicAtomProps {
  width?: string;
  height?: string;
  borderColor?: string;
}

export interface BasicButtonProps extends BasicAtomProps {
  backGroundColor?: string;
  title?: string;
  onClick?: () => void;
}

export interface LoginButtonProps extends BasicButtonProps {
  color?: string;
  fontSize?: string;
  radius?: string;
}

export interface BasicInputProps extends BasicAtomProps {
  margin?: string;
  padding?: string;
  placeholder?: string;
  background?: string;
  type?: string;
  inputRef?: any;
  onChange?: () => void;
}

export interface HeaderProps {
  handleStartClick: () => void;
}

export interface APIProps {
  api: (data?: any) => any;
  data?: any;
}

export interface SlopeType {
  x_top_left: number;
  x_top_right: number;
  x_bottom_left: number;
  x_bottom_right: number;
  y_top_left: number;
  y_top_right: number;
  y_bottom_left: number;
  y_bottom_right: number;
  z_top_left: number;
  z_top_right: number;
  z_bottom_left: number;
  z_bottom_right: number;
}
