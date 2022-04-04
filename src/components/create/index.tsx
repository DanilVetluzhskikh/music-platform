import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { NextPage } from 'next';
import { CircularProgress } from '@mui/material';
import { CreateContainer, CreateWrapper, SubmitBtn, Title, Error, Success } from './styled';
import { Fields, Uploads } from './components';
import { MainLayout } from 'src/layouts/MainLayout';
import { getNavbarOpen } from '@store/slices/navbar';
import { HalfTrack } from '@type/track';
import { createTrack } from 'src/services/createTrack';

const Create: NextPage = () => {
  const [ previewImage, setPreviewImage ] = useState<string>('');
  const [ loader, setLoader ] = useState<boolean>(false);
  const [ error, setError ] = useState<string>('');
  const [ success, setSuccess ] = useState<string>('');
  const [ form, setForm ] = useState<HalfTrack>({
    name: '',
    artist: '',
    text: '',
    picture: '',
    audio: '',
  });

  const open = useSelector(getNavbarOpen);

  const refImage = useRef<HTMLInputElement>(null);
  const refAudio = useRef<HTMLInputElement>(null);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files, } = e.target;

    if(name === 'picture' && files || name === 'audio' && files){
      if(name === 'picture'){
        setPreviewImage(URL.createObjectURL(files[0]));
      }

      return setForm((prev) => ({
        ...prev,
        [name]:files[0],
      }));
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setError('');
    setSuccess('');

    if(
      !form.name.trim().length ||
      !form.text.trim().length ||
      !form.artist.trim().length ||
      !form.picture ||
      !form.audio
    ){
      return setError('Заполните все поля');
    }

    setLoader(true);
    const result = await createTrack(form);
    setLoader(false);

    if(typeof result === 'string'){
      return setError(result);
    }

    setForm({
      name: '',
      artist: '',
      text: '',
      picture: '',
      audio: '',
    });

    return setSuccess('Трек успешно создан');
  };

  if(loader){
    return (
      <MainLayout>
        <CreateContainer open={open}>
          <CreateWrapper>
            <CircularProgress />;
          </CreateWrapper>
        </CreateContainer>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <CreateContainer open={open}>
        <CreateWrapper>
          <Title>Создание трека</Title>

          <Fields
            handleChangeInput={handleChangeInput}
            text={form.text}
            name={form.name}
            artist={form.artist}
          />

          <Uploads
            handleChangeInput={handleChangeInput}
            refImage={refImage}
            refAudio={refAudio}
            previewImage={previewImage}
            picture={form.picture}
          />

          <SubmitBtn
            onClick={handleSubmit}
            disabled={loader}
          >Создать</SubmitBtn>

          {error && <Error>{error}</Error>}

          {success && <Success>{success}</Success>}
        </CreateWrapper>
      </CreateContainer>
    </MainLayout>
  );
};

export default Create;