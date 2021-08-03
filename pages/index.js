import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import usePlaylist from '../hooks/usePlaylist';
import { PlaylistContext } from '../Contexts/PlaylistContext';

function Index(props) {
  const items = usePlaylist(
    'PLy1OvPJDc50Ri963vIYgtnjgPqLTMat_V',
    'AIzaSyCkhQc1Gu6kmb6pYcfArYo75WXgSs_5PFw'
  );
  const { setItems, setCount, count } = useContext(PlaylistContext);
  const [itemID, setItemID] = useState([]);

  useEffect(() => {
    if (items) {
      items.forEach((obj) => {
        const id = obj.snippet.resourceId.videoId;
        setItemID((prev) => {
          return [...prev, id];
        });
      });
    }
  }, [items]);

  const shuffledArray = itemID.sort((a, b) => 0.5 - Math.random());
  setItems(shuffledArray);
  if (typeof window !== 'undefined') {
    localStorage.setItem('count', 0);
  }

  const playLink = shuffledArray ? (
    <Link href={`/play/${shuffledArray[count]}`}>
      <a>caramel</a>
    </Link>
  ) : (
    <div></div>
  );
  return <div>{playLink}</div>;
}

export default Index;
