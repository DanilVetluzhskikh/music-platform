import React, { FC, useEffect } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useDispatch, useSelector } from 'react-redux';
import PauseIcon from '@mui/icons-material/Pause';
import { TrackItemArtist, TrackItemBtnDelete, TrackItemBtnPlay, TrackItemBtnsContainer, TrackItemContentWrapper, TrackItemImg, TrackItemListens, TrackItemText, TrackItemTextContainer, TrackItemTitle } from './styled';
import { Track } from '@type/track';
import { API } from '@constants/api';
import { getTrack, setActive, setCurrentTime, setDuration, setPause, setTrack } from '@store/slices/track';
import { getNavbarOpen } from '@store/slices/navbar';

interface ContentProps {
    item: Track
}

export const Content: FC<ContentProps> = ({
  item,
}) => {
  const dispatch = useDispatch();

  const open = useSelector(getNavbarOpen);
  const { track, pause, active, audio, } = useSelector(getTrack);
  const { picture, name, artist, listens, _id, } = item;

  const equal = track?._id === _id;

  const handlePlay = () => {
    if(equal){
      if(pause){
        dispatch(setActive());
      }else{
        dispatch(setPause());
      }
    }else{
      dispatch(setTrack(item));
      dispatch(setActive());
    }
  };

  useEffect(() => {
    if(audio && equal){
      const copy = new Audio(`${API}/${item.audio}`);

      copy.onloadeddata = () => {
        dispatch(setDuration(Math.floor(copy.duration)));
      };

      audio.ontimeupdate = () => {
        dispatch(setCurrentTime(Math.floor(audio.currentTime)));
      };
    }
  }, [ audio, dispatch, item.audio, equal ]);

  return (
    <TrackItemContentWrapper>
      <TrackItemImg src={`${API}/${picture}`} alt="logo" />

      <TrackItemTextContainer>
        <TrackItemText>Трек</TrackItemText>

        <TrackItemTitle>{name}</TrackItemTitle>

        <TrackItemArtist>{artist}</TrackItemArtist>

        <TrackItemListens>Прослушиваний <strong>{listens}</strong></TrackItemListens>
      </TrackItemTextContainer>

      <TrackItemBtnsContainer open={open}>
        <TrackItemBtnPlay onClick={handlePlay}>
          {equal && active ? <PauseIcon /> : <PlayArrowIcon />}
        </TrackItemBtnPlay>

        <TrackItemBtnDelete>
          <ClearIcon />
        </TrackItemBtnDelete>
      </TrackItemBtnsContainer>
    </TrackItemContentWrapper>
  );
};