import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Item, ItemImg, ItemTitle, ListItemsContainer } from './styled';
import { getNavbarOpen } from '@store/slices/navbar';
import { Track } from '@type/track';
import { API } from '@constants/api';

interface ListItemsProps {
    tracks: Track[]
}

export const ListItems: FC<ListItemsProps> = ({
  tracks,
}) => {
  const open = useSelector(getNavbarOpen);
  const router = useRouter();

  const handleRoute = (id: string) => router.push(`/track/${id}`);

  return (
    <ListItemsContainer open={open}>
      {tracks.map(item => (
        <Item key={item._id} onClick={() => handleRoute(item._id)}>
          <ItemImg src={`${API}/${item.picture}`} />

          <ItemTitle>{item.artist} - {item.name}</ItemTitle>
        </Item>
      ))}
    </ListItemsContainer>
  );
};