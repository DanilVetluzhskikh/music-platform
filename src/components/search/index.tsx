import React, { FC, useState } from 'react';
import { ListItems } from './components';
import { SearchBtn, SearchContainer, SearchInput, SearchWrapper } from './styled';
import { Track } from '@type/track';
import { getSearchTracks } from 'src/services/getSearchTracks';
import { setTrack } from '@store/slices/track';

export const Search: FC = () => {
  const [ search, setSearch ] = useState<string>('');
  const [ tracks, setTracks ] = useState<Track[]>([]);

  const handleChangeInput = async (e: React.ChangeEvent<HTMLInputElement>) => {

    const { target: { value, }, } = e;

    setSearch(value);

    const result = await getSearchTracks(value);

    setTracks(result);
  };

  return (
    <SearchContainer>
      <SearchWrapper>
        <SearchInput placeholder='Найдите песню...' value={search} onChange={handleChangeInput}/>

        <SearchBtn>Найти</SearchBtn>
      </SearchWrapper>

      <ListItems tracks={tracks} />
    </SearchContainer>
  );
};