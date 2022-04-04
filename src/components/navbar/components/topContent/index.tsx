import React from 'react';
import { FC } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDispatch } from 'react-redux';
import { ArrowContainer, ArrowItem, SignContainer, SignIn, SignUp } from './styled';
import { handleOpenNavbar, handleCloseNavbar } from '@store/slices/navbar';

interface TopContentProps {
    open: boolean;
}

export const TopContent: FC<TopContentProps> = ({
  open,
}) => {
  const dispatch = useDispatch();

  return  (
    <>
      <ArrowContainer>
        <ArrowItem
          disabled={!open}
          open={open}
          onClick={() => dispatch(handleCloseNavbar())}
        >
          <ArrowBackIcon/>
        </ArrowItem>

        <ArrowItem
          disabled={open}
          open={!open}
          onClick={() => dispatch(handleOpenNavbar())}
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
};