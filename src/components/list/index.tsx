import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListContainer } from './styled';
import { TrackItem } from './components/track';
import { getNavbarOpen } from '@store/slices/navbar';
import { getListTracks, setListTracks } from '@store/slices/tracks';
import { queryTracksList } from 'src/services/getTracks';

export const ListTracks: FC = () => {
  const open = useSelector(getNavbarOpen);
  const tracks= useSelector(getListTracks);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(setListTracks(await queryTracksList()));
    })();
  }, [ dispatch ]);

  return (
    <ListContainer open={open}>
      {tracks.map(track => (
        <TrackItem
          track={track}
          key={track._id}
        />
      ))}
    </ListContainer>
  );
};