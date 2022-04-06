import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { CardItem, Description, Image, ImageContainer, Title } from './styled';
import { API } from '@constants/api';
import { Track } from '@type/track';

interface TrackProps {
    track: Track
}

export const TrackItem: FC<TrackProps> = ({
  track,
}) => {
  const router = useRouter();
  const { picture, name, artist, _id, } = track;

  return (
    <CardItem onClick={() => router.push(`/track/${_id}`)}>
      <ImageContainer>
        <Image
          src={`${API}/${picture}`}
          alt="img"
        />
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