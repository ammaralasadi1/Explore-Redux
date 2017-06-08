import axios from 'axios';

// ROOT_URL2 = "http://content.guardianapis.com/tags?q=new york&api-key=ec3d1e07-34ba-4a17-b987-bf7b0c20cf3e"
export const FETCH_NEWS = 'FETCH_NEWS' //to keep the code consistant between the action creator and the reducer

export function fetchNews(city) {
    const url = `http://webhose.io/filterWebContent?token=708aad39-3535-4ded-9b2f-098115a5610f&format=json&ts=1496784572748&sort=social.facebook.likes&q=location%3A${city}`;

    const request = axios.get(url)
      return {
        type: FETCH_NEWS, // we dont have to refrence strings, variable are cleaner.
        payload: request
      };
}



//
// export function fetchNews (headline) {
//   const url2 = `http://content.guardianapis.com/tags?q=${headline}&api-key=ec3d1e07-34ba-4a17-b987-bf7b0c20cf3e`;
//   const news_request = axios.get(url2);
//   console.log(url2);
//   return {
//     type: FETCH_NEWS,
//     payload: news_request
//   };
// }
