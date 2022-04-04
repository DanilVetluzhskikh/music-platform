import axios from 'axios';
import { API } from '@constants/api';
import { HalfTrack, Track } from '@type/track';

export const createTrack = async (track: HalfTrack): Promise<string | boolean> => {
  try {
    const form = new FormData();

    form.append('name', track.name);
    form.append('artist', track.artist);
    form.append('text', track.text);
    form.append('audio', track.audio);
    form.append('picture', track.picture);

    await axios.post(`${API}/tracks`, form);

    return true;
  }catch(e){
    return 'Не удалось создать трек';
  }
};