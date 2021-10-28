import React, { useEffect, useContext, useState, useRef } from "react";
import YouTubeToHtml5 from "@thelevicole/youtube-to-html5-loader";
import { useRouter } from "next/router";
import { PlaylistContext } from "../../Contexts/PlaylistContext";
import Video from "../../Components/Video";
import Circle from "../../Components/Circle";
import Countdown from "../../Components/Countdown";

function Player(props) {
  const router = useRouter();
  const videoRef = useRef(null);

  const src = router.query.src;
  console.log(localStorage.getItem("intermissionCount"));
  const { allow, intermissionItems } = useContext(PlaylistContext);
  console.log("intermissionItems");
  console.log(intermissionItems);
  useEffect(() => {
    if (videoRef.current && typeof window !== "undefined" && allow) {
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
          "count",
          parseInt(localStorage.getItem("count")) + 1
        );

        if (intermissionItems[localStorage.getItem("intermissionCount")]) {
          router.push(
            "/intermission/" +
              intermissionItems[localStorage.getItem("intermissionCount")]
          );
        } else if (
          !intermissionItems[localStorage.getItem("intermissionCount")]
        ) {
          localStorage.setItem("intermissionCount", 0);
          router.push("/intermission/" + intermissionItems[0]);
        }
      }, 45 * 1000);
    }
  }, [videoRef.current]);

  return (
    <>
      <Circle index={false}>
        <Video ref={videoRef} id={src} />
      </Circle>
      <Countdown time={45} />
    </>
  );
}

export default Player;
