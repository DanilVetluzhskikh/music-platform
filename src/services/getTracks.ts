import axios from 'axios';
import { API } from '@constants/api';
import { Track } from '@type/track';

export const queryTracksList = async (): Promise<Track[]> => {
  try {
    const { data, }: {data: Track[]} = await axios.get(`${API}/tracks`);

    return data;
  }catch(e){
    console.log(e, 'Не удалось получить список треков');

    return [];
  }
};