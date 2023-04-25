const GOOGLE_API_KEY = "AIzaSyCffBpyMSrh1BDOhjDnNu5gU9ADJSwfDRI";

export const YOUTUBE_VEDIOS_API =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

//   count = 50

// random = ''.join(random.choice(string.ascii_uppercase + string.digits) for in range(3))

// export const RANDOM_VEDIOS =
//   "https://www.googleapis.com/youtube/v3/search?key={AIzaSyA2mfTI0eJRkRwj_yJmEehAwTDxKIqVqz4}&maxResults={50}&part=snippet&type=video&q={}".format(
//     YOUTUBE_VEDIOS_API,
//     count,
//     random
//   );
