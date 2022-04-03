import React from 'react';
import { FC } from 'react';
import { NavBar } from '@components/navbar';

export const MainLayout: FC = ({
  children,
}) => (
  <>
    <NavBar />

    {children}
  </>
);
