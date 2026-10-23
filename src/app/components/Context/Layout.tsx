import { ReactNode } from 'react';

import './styles.css';

interface LayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return <main className='root'>{children}</main>;
};
