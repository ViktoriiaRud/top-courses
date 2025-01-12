import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";


export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    arrow?: 'right' | 'down' | 'none';
    variant?:
    | 'primary'
    | 'ghost'
    size?: 'sm' | 'md' | 'lg';
};


export default ButtonProps;