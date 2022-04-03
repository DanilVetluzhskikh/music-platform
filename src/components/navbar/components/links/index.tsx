import Link from 'next/link';
import React from 'react';
import { FC } from 'react';
import { useRouter } from 'next/router';
import { LinkContainer, LinksContainer, LinkText } from './styled';
import { LinksList } from '@constants/links';

export const Links: FC = () => {
  const { pathname, } = useRouter();

  return (
    <LinksContainer>
      {LinksList.map(item => (
        <Link
          href={item.to}
          passHref
          key={item.text}
        >
          <LinkContainer exact={pathname===item.to}>
            <item.icon sx={{ color: 'white', }} />

            <LinkText>
              {item.text}
            </LinkText>
          </LinkContainer>
        </Link>
      ))}
    </LinksContainer>
  );
};