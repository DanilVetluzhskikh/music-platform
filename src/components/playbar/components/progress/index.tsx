import React, { FC } from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { useSelector } from 'react-redux';
import { ProgressBar, ProgressContainer, ProgressNumbers } from './styled';
import { getTrack } from '@store/slices/track';

interface ProgressProps {
    left: string | number;
    right: string | number;
    sound: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Progress: FC<ProgressProps> = ({
  left,
  right,
  sound,
  onChange,
}) => {
  const { duration, currentTime, } = useSelector(getTrack);

  return (
    <ProgressContainer sound={sound}>
      {sound && <VolumeUpIcon sx={{ color:'white', }} />}

      <ProgressBar
        min={0}
        max={sound ? right : duration}
        value={sound ? left : currentTime}
        onChange={onChange}
        type="range"
      />

      <ProgressNumbers>
        {left}/{right}
      </ProgressNumbers>
    </ProgressContainer>
  );
};
