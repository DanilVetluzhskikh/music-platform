import React, { FC } from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { CardItem, Description, Image, ImageContainer, PlayBtn, Title } from './styled';
import { API } from '@constants/api';
import { Track } from '@type/track';

interface TrackProps {
    track: Track
}

export const TrackItem: FC<TrackProps> = ({
  track,
}) => {
  const { picture, name, artist, } = track;

  return (
    <CardItem >
      <ImageContainer>
        <Image
          src={`${API}/${picture}`}
          alt="img"
        />

        <PlayBtn>
          <PlayCircleIcon sx={styles} />
        </PlayBtn>
      </ImageContainer>

      <Title>
        {name}
      </Title>

      <Description>
        {artist}
      </Description>
    </CardItem>
  );
};

const styles = {
  color: '#009605',
  width: '50px',
  height: '50px',
  transition: 'all 150ms ease-in',
  ':hover': {
    transform: 'scale(1.2)',
  },
};