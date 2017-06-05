import axios from 'axios';

// ROOT_URL2 = "http://content.guardianapis.com/tags?q=new york&api-key=ec3d1e07-34ba-4a17-b987-bf7b0c20cf3e"
export const FETCH_ARTIST = 'FETCH_ARTIST' //to keep the code consistant between the action creator and the reducer

export function fetchArtist(city) {
    const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${city}&api_key=62d54224d6e6c90a76cec4893c39d5b7&format=json`;
    const request = axios.get(url)
      return {
        type: FETCH_ARTIST, // we dont have to refrence strings, variable are cleaner.
        payload: request
      };
}
