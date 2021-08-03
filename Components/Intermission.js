import React, { useEffect, useContext, useState, useRef } from 'react';
import YouTubeToHtml5 from '@thelevicole/youtube-to-html5-loader';
import { useRouter } from 'next/router';
import Video from './Video';
import { PlaylistContext } from '../Contexts/PlaylistContext';

function Player(props) {
  const player = new YouTubeToHtml5({
    autoload: false,
    withAudio: true,
  });
  setTimeout(() => {
    player.load();
  }, 0);

  const { items, count, curr, setCurr } = useContext(PlaylistContext);
  curr.forEach((obj) => {
    clearTimeout(obj);
  });

  const videoRef = useRef(null);
  const router = useRouter();
  const [mute, setMute] = useState(false);

  console.log(localStorage.getItem('count'));

  useEffect(() => {
    if (videoRef.current) {
      console.log('useeffect');
      const pauseTimeout = setTimeout(() => {
        videoRef.current?.pause();
        videoRef.current.volume = 0;
        console.log('IT RAN NOW');
        router.push('/play/' + items[localStorage.getItem('count')]);
      }, 15 * 1000);
      // setCurr((prev) => {
      //   return [...prev, pauseTimeout];
      // });
    }
  }, [videoRef.current]);

  return (
    <>
      <Video mute={mute} ref={videoRef} id='BV7RkEL6oRc' />
    </>
  );
}

export default Player;
