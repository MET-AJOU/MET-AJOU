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
