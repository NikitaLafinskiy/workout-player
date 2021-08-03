import React, { useEffect, useContext, useState, useRef } from 'react';
import YouTubeToHtml5 from '@thelevicole/youtube-to-html5-loader';
import { useRouter } from 'next/router';
import { PlaylistContext } from '../Contexts/PlaylistContext';
import Video from './Video';

function Player(props) {
  const player = new YouTubeToHtml5({
    autoload: false,
    withAudio: true,
  });
  setTimeout(() => {
    player.load();
  }, 0);

  const { setCount, count, curr, setCurr } = useContext(PlaylistContext);
  curr.forEach((obj) => {
    clearTimeout(obj);
  });
  // setCount(count + 1);
  const router = useRouter();
  const videoRef = useRef(null);
  const [mute, setMute] = useState(false);

  const src = router.query.src;

  useEffect(() => {
    if (videoRef.current) {
      console.log('useeffect');
      const pauseTimeout = setTimeout(() => {
        videoRef.current?.pause();
        videoRef.current.volume = 0;
        console.log('IT RAN NOW');
        localStorage.setItem(
          'count',
          parseInt(localStorage.getItem('count')) + 1
        );
        router.push('/intermission');
      }, 45 * 1000);
    }
  }, [videoRef.current]);

  return (
    <>
      <Video mute={mute} ref={videoRef} id={src} />
    </>
  );
}

export default Player;
