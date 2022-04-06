import React, { FC } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { Comment, CommentImage, CommentInput, CommentName, CommentsContainer, CommentSubmit, CommentText, CommentTextContainer } from './styled';

export const Comments: FC = () => {

  return (
    <CommentsContainer>
      <Comment>
        <CommentImage>
          <PersonIcon sx={styles} />
        </CommentImage>

        <CommentTextContainer>
          <CommentName>
            Валера
          </CommentName>

          <CommentText>
            Трек пушка
          </CommentText>
        </CommentTextContainer>
      </Comment>

      <Comment>
        <CommentImage>
          <PersonIcon sx={styles} />
        </CommentImage>

        <CommentTextContainer>
          <CommentName>
            Клава кока
          </CommentName>

          <CommentText>
            Фитанем?
          </CommentText>
        </CommentTextContainer>
      </Comment>

      <Comment>
        <CommentImage>
          <PersonIcon sx={styles} />
        </CommentImage>

        <CommentTextContainer>
          <CommentName>
            Братка
          </CommentName>

          <CommentText>
            Мне 40. Слушаю эту музыку и рада, что в ней нет мата!В ней есть правильные жизненные ценности! Молодцы! На вас равняются дети!
          </CommentText>
        </CommentTextContainer>
      </Comment>

      <Comment>
        <CommentImage>
          <PersonIcon sx={styles} />
        </CommentImage>

        <CommentTextContainer>
          <CommentName>
            Петя
          </CommentName>

          <CommentText>
            Сделал из своих проводных наушников беспроводные слушаю на рипите!
          </CommentText>
        </CommentTextContainer>
      </Comment>

      <CommentInput placeholder='Напишите комментарий...' />

      <CommentSubmit>Оставить комментарий</CommentSubmit>
    </CommentsContainer>
  );
};

const styles = {
  color: 'white',
  height: '50px',
  width: '50px',
};