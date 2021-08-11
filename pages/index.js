import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import usePlaylist from '../hooks/usePlaylist';
import { PlaylistContext } from '../Contexts/PlaylistContext';

function Index(props) {
  const key = 'AIzaSyCkhQc1Gu6kmb6pYcfArYo75WXgSs_5PFw';
  const items = usePlaylist('PLy1OvPJDc50Ri963vIYgtnjgPqLTMat_V', key);
  const intermissionItems = usePlaylist(
    'PLy1OvPJDc50T20bzl8n7wKl2SU_1aMtRY',
    key
  );

  const { setItems, setIntermissionItems, setAllow } =
    useContext(PlaylistContext);
  const [itemID, setItemID] = useState([]);
  const [intermissionItemID, setIntermissionItemID] = useState([]);

  const convertToIds = (arr, func) => {
    arr.forEach((obj) => {
      const id = obj.snippet.resourceId.videoId;
      func((prev) => {
        return [...prev, id];
      });
    });
  };

  const randomize = (arr) => {
    return arr.sort((a, b) => 0.5 - Math.random());
  };

  useEffect(() => {
    if (items && intermissionItems) {
      setAllow(true);
      convertToIds(items, setItemID);
      convertToIds(intermissionItems, setIntermissionItemID);
    }
  }, [items]);

  const shuffled = randomize(itemID);
  setItems(randomize(itemID));
  setIntermissionItems(randomize(intermissionItemID));

  if (typeof window !== 'undefined') {
    localStorage.setItem('count', 0);
    localStorage.setItem('intermissionCount', 0);
  }

  const playLink = shuffled ? (
    <Link href={`/play/${shuffled[0]}`}>
      <a>caramel</a>
    </Link>
  ) : (
    <div></div>
  );
  return <div>{playLink}</div>;
}

export default Index;
