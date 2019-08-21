export interface ITrack {
    id?: string;
    song_name: string;
    artist: string
    description: string;
    composers: string;
    genre: string;
    imageUrl: string;
    downloadUrl?: string;
    length: string;
}