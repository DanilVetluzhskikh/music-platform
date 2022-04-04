import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Links, Logo, TopContent } from './components';
import { NavbarContainer, NavbarLeftContainer, NavbarTopContainer } from './styled';
import { getNavbarOpen } from '@store/slices/navbar';

export const NavBar: FC = () => {
  const open = useSelector(getNavbarOpen);

  return (
    <NavbarContainer>
      <NavbarLeftContainer open={open}>
        <Logo />

        <Links />
      </NavbarLeftContainer>

      <NavbarTopContainer open={open}>
        <TopContent
          open={open}
        />
      </NavbarTopContainer>
    </NavbarContainer>
  );
};