export type Track = {
    _id: string;
    name: string;
    artist: string;
    text: string;
    listens: number;
    picture: string;
    audio: string;
    comments: Comment[]
};

export type HalfTrack = Pick<Track, 'artist' | 'name' | 'audio' | 'picture' | 'text' >;

export type Comment = {
    id: string;
    track_id: string;
    name: string;
    text: string;
};