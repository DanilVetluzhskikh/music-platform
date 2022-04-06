import axios from 'axios';
import { Track } from '@type/track';
import { API } from '@constants/api';

export const getSearchTracks = async (search: string): Promise<Track[]> => {
  try {
    const { data, } = await axios.get<Track[]>(`${API}/tracks/search?query=${search}`);

    return data;
  }catch(e){
    console.log(e);

    return [];
  }
};