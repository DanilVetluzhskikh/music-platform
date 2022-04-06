import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { PlayBarContainer, PlayBtn, PlayName } from './styled';
import { Progress } from './components';
import { getNavbarOpen } from '@store/slices/navbar';
import { getTrack, setActive, setAudioCurrentTime, setPause, setVolume } from '@store/slices/track';
import { CalculateDuration } from '@utils/calculateDuration';

export const PlayBar: FC = () => {

  const dispatch = useDispatch();

  const open = useSelector(getNavbarOpen);

  const { active, pause, track, volume, duration, currentTime, } = useSelector(getTrack);

  const play = () => {
    if(track){
      if(pause){
        dispatch(setActive());
      }else{
        dispatch(setPause());
      }
    }
  };

  const handleChangeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAudioCurrentTime(Number(e.target.value)));
  };

  const handleChangeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setVolume(Number(e.target.value)));
  };

  return (
    <PlayBarContainer open={open}>
      <PlayBtn onClick={play}>
        {active ? <PauseIcon /> : <PlayArrowIcon />}
      </PlayBtn>

      <PlayName>{track?.artist} - {track?.name}</PlayName>

      <Progress left={CalculateDuration(currentTime)} right={CalculateDuration(duration)} sound={false} onChange={handleChangeCurrentTime} />

      <Progress left={volume} right={100} sound onChange={handleChangeVolume} />
    </PlayBarContainer>
  );
};