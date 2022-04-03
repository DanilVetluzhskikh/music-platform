import React, { FC } from 'react';
import Image from 'next/image';
import { LogoContainer } from './styled';
import LogoImg from '@assets/navbar/logo.svg';

export const Logo: FC = () => (
  <LogoContainer>
    <Image
      alt="logo"
      src={LogoImg}
    />
  </LogoContainer>
);