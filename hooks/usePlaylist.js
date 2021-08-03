import { useState, useEffect } from 'react';
import axios from 'axios';

const usePlaylist = (id, api_key) => {
  const [list, setList] = useState(null);
  useEffect(() => {
    //key AIzaSyCkhQc1Gu6kmb6pYcfArYo75WXgSs_5PFw
    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${id}&key=${api_key}`;
    axios.get(url).then((doc) => {
      setList(doc.data.items);
    });
  }, [null]);
  return list;
};

export default usePlaylist;
