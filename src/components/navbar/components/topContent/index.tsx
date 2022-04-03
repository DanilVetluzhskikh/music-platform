import React from 'react';
import { FC } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ArrowContainer, ArrowItem, SignContainer, SignIn, SignUp } from './styled';

interface TopContentProps {
    open: boolean;
    handleOpen: () => void;
    handleClose: () => void;
}

export const TopContent: FC<TopContentProps> = ({
  open,
  handleOpen,
  handleClose,
}) => (
  <>
    <ArrowContainer>
      <ArrowItem
        disabled={!open}
        open={open}
        onClick={handleClose}
      >
        <ArrowBackIcon/>
      </ArrowItem>

      <ArrowItem
        disabled={open}
        open={!open}
        onClick={handleOpen}
      >
        <ArrowForwardIcon />
      </ArrowItem>
    </ArrowContainer>

    <SignContainer>
      <SignUp>
            Зарегистрироваться
      </SignUp>

      <SignIn>
            Войти
      </SignIn>
    </SignContainer>
  </>
);