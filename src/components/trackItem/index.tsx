import React, { FC } from 'react';
import { LinearProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { TrackItemContainer } from './styled';
import { Content } from './components';
import { Comments } from './components/comments';
import { Track } from '@type/track';
import { getNavbarOpen } from '@store/slices/navbar';

interface TrackItemProps {
    item: Track | null;
}

export const TrackItem: FC<TrackItemProps> = ({
  item,
}) => {
  const open = useSelector(getNavbarOpen);

  if(!item){
    return <LinearProgress />;
  }

  return (
    <TrackItemContainer  open={open}>
      <Content item={item} />

      <Comments />
    </TrackItemContainer>
  );
};