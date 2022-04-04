import { TextField } from '@mui/material';
import React, { FC } from 'react';

interface FieldsProps {
    name: string;
    artist: string;
    text: string;
    handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Fields: FC<FieldsProps> = ({
  handleChangeInput,
  name,
  artist,
  text,
}) => (
  <>
    <TextField
      label="Название"
      maxRows={2}
      fullWidth
      name="name"
      onChange={handleChangeInput}
      value={name}
    />

    <TextField
      label="Исполнитель"
      fullWidth
      maxRows={2}
      name="artist"
      onChange={handleChangeInput}
      value={artist}
    />

    <TextField
      maxRows={10}
      multiline
      label="Текст"
      fullWidth
      name="text"
      onChange={handleChangeInput}
      value={text}
    />
  </>
);