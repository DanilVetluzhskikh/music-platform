import React, { FC, useState } from 'react';
import { Links, Logo, TopContent } from './components';
import { NavbarContainer, NavbarLeftContainer, NavbarTopContainer } from './styled';

export const NavBar: FC = () => {
  const [ open, setOpen ] = useState<boolean>(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <NavbarContainer>
      <NavbarLeftContainer open={open}>
        <Logo />

        <Links />
      </NavbarLeftContainer>

      <NavbarTopContainer open={open}>
        <TopContent
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      </NavbarTopContainer>
    </NavbarContainer>
  );
};