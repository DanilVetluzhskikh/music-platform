import React, { FC } from 'react';
import { LinearProgress } from '@mui/material';
import { TrackItemContainer } from './styled';
import { Content } from './components';
import { Comments } from './components/comments';
import { Track } from '@type/track';

interface TrackItemProps {
    item: Track | null;
}

export const TrackItem: FC<TrackItemProps> = ({
  item,
}) => {

  if(!item){
    return <LinearProgress />;
  }

  return (
    <TrackItemContainer>
      <Content item={item} />

      <Comments />
    </TrackItemContainer>
  );
};