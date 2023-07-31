import { ReactNode } from 'react';
import { ContainerStyled } from './Container.styled';

interface SidebarProps {
  children: ReactNode;
}

export const Container: React.FC<SidebarProps> = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};
