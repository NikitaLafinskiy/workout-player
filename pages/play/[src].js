import React, { useEffect, useContext, useState, useRef } from 'react';
import YouTubeToHtml5 from '@thelevicole/youtube-to-html5-loader';
import { useRouter } from 'next/router';
import { PlaylistContext } from '../../Contexts/PlaylistContext';
import Video from '../../Components/Video';

function Player(props) {
  const router = useRouter();
  const videoRef = useRef(null);

  const src = router.query.src;
  const { allow } = useContext(PlaylistContext);
  console.log(allow);
  useEffect(() => {
    if (videoRef.current && typeof window !== 'undefined' && allow) {
      console.log('ran');
      const player = new YouTubeToHtml5({
        autoload: false,
        withAudio: true,
      });
      setTimeout(() => {
        player.load();
      }, 0);

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
      <Video ref={videoRef} id={src} />
    </>
  );
}

export default Player;
