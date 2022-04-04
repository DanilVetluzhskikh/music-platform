import React, { FC } from 'react';
import UploadIcon from '@mui/icons-material/Upload';
import { Img, InputFile, UploadContainer } from './styled';

interface UploadsProps {
    refImage: React.RefObject<HTMLInputElement>;
    refAudio: React.RefObject<HTMLInputElement>;
    handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    picture: string;
    previewImage: string;
}

export const Uploads: FC<UploadsProps> = ({
  refImage,
  handleChangeInput,
  refAudio,
  previewImage,
  picture,
}) => {

  return (
    <>
      <UploadContainer
        onClick={() => refImage.current?.click()}
      >
        Фото

        <InputFile
          type="file"
          ref={refImage}
          name="picture"
          onChange={handleChangeInput}
        />

        <UploadIcon />
      </UploadContainer>

      {picture && <Img alt="preview" src={previewImage} />}

      <UploadContainer
        onClick={() => refAudio.current?.click()}
      >
        Аудио

        <InputFile
          ref={refAudio}
          type="file"
          name="audio"
          onChange={handleChangeInput}
        />

        <UploadIcon />
      </UploadContainer>
    </>
  );
};