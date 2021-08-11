import React, { useEffect, useContext, useState, useRef } from 'react';
import YouTubeToHtml5 from '@thelevicole/youtube-to-html5-loader';
import { useRouter } from 'next/router';
import Video from '../Components/Video';
import { PlaylistContext } from '../Contexts/PlaylistContext';

function Player(props) {
  const { items, allow } = useContext(PlaylistContext);

  const videoRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (videoRef.current && typeof window !== 'undefined' && allow) {
      const player = new YouTubeToHtml5({
        autoload: false,
        withAudio: true,
      });
      setTimeout(() => {
        player.load();
      }, 0);
      videoRef.current?.play();
      const pauseTimeout = setTimeout(() => {
        videoRef.current?.pause();
        videoRef.current.volume = 0;
        router.push('/play/' + items[localStorage.getItem('count')]);
      }, 15 * 1000);
    }
  }, [videoRef.current]);

  return (
    <>
      <Video ref={videoRef} id='XUzwdBQDzxw' />
    </>
  );
}

export default Player;
