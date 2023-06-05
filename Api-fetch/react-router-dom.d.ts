import { NavLinkProps } from 'react-router-dom';

declare module 'react-router-dom' {
  export interface NavLinkProps<T = any> extends React.AnchorHTMLAttributes<T> {
    exact : boolean;
    activeClassName : string;
  }
}