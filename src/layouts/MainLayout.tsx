import React from 'react';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { ChilderContainer } from './styled';
import { NavBar } from '@components/navbar';
import { getNavbarOpen } from '@store/slices/navbar';
import { PlayBar } from '@components/playbar';

export const MainLayout: FC = ({
  children,
}) => {
  const open = useSelector(getNavbarOpen);

  return (
    <>
      <NavBar />

      <ChilderContainer open={open}>
        {children}

      </ChilderContainer>

      <PlayBar />
    </>
  );
};
