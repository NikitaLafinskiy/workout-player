import React, { useEffect, useContext, useState, useRef } from 'react';
import YouTubeToHtml5 from '@thelevicole/youtube-to-html5-loader';
import { useRouter } from 'next/router';
import Video from '../../Components/Video';
import { PlaylistContext } from '../../Contexts/PlaylistContext';
import Circle from '../../Components/Circle';
import Countdown from '../../Components/Countdown';

function Player(props) {
  const videoRef = useRef(null);
  const router = useRouter();

  const src = router.query.src;
  const { items, allow } = useContext(PlaylistContext);

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
      videoRef.current.currentTime = 3;
      const pauseTimeout = setTimeout(() => {
        videoRef.current?.pause();
        videoRef.current.volume = 0;

        localStorage.setItem(
          'intermissionCount',
          parseInt(localStorage.getItem('intermissionCount')) + 1
        );
        if (items[localStorage.getItem('count')]) {
          router.push('/play/' + items[localStorage.getItem('count')]);
        } else if (!items[localStorage.getItem('count')]) {
          localStorage.setItem('count', 0);
          router.push('/play/' + items[0]);
        }
      }, 15 * 1000);
    }
  }, [videoRef.current]);

  return (
    <>
      <Circle index={false}>
        <Video ref={videoRef} id={src} />
      </Circle>
      <Countdown time={15} />
    </>
  );
}

export default Player;
