import axios from 'axios';
import { API } from '@constants/api';
import { Track } from '@type/track';

export const getOneTrack = async (id: string): Promise<Track | null> => {
  try {
    const { data, } = await axios.get<Track>(`${API}/tracks/${id}`);

    return data;
  }catch(e){
    console.log(e);

    return null;
  }
};