import React, { useEffect, useContext, useState, useRef } from 'react';
import YouTubeToHtml5 from '@thelevicole/youtube-to-html5-loader';
import { useRouter } from 'next/router';
import { PlaylistContext } from '../../Contexts/PlaylistContext';
import Video from '../../Components/Video';

function Player(props) {
  const router = useRouter();
  const videoRef = useRef(null);

  const src = router.query.src;
  const { allow, intermissionItems } = useContext(PlaylistContext);

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
        localStorage.setItem(
          'count',
          parseInt(localStorage.getItem('count')) + 1
        );
        router.push(
          '/intermission/' +
            intermissionItems[localStorage.getItem('intermissionCount')]
        );
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
