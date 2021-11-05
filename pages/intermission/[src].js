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
  const [opts, setOpts] = useState(
    typeof window !== "undefined" && JSON.parse(localStorage.getItem("opts"))
  );
  const [time, setTime] = useState("");
  const [items, setItems] = useState(
    typeof window !== "undefined" && JSON.parse(localStorage.getItem("items"))
  );
  const [intermissionItems, setIntermissionItems] = useState(
    typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("intermissionsItems"))
  );
  const [allow, setAllow] = useState(
    typeof window !== "undefined" && JSON.parse(localStorage.getItem("allow"))
  );

  const src = router.query.src;
  useEffect(() => {
    if (videoRef.current && typeof window !== "undefined" && allow && src) {
      console.log(src);
      const player = new YouTubeToHtml5({
        autoload: false,
        withAudio: true,
      });
      setTimeout(() => {
        player.load();
      }, 0);
      videoRef.current?.play();
      const func = () => {
        const time = opts.full
          ? videoRef.current.duration
          : parseInt(opts.time1);
        setTime(time);

        const rerouteTimeout = setTimeout(() => {
          videoRef.current?.pause();
          localStorage.setItem(
            "intermissionCount",
            parseInt(localStorage.getItem("intermissionCount")) + 1
          );
          if (opts.both) {
            if (items[localStorage.getItem("count")]) {
              router.push("/play/" + items[localStorage.getItem("count")]);
            } else if (!items[localStorage.getItem("count")]) {
              localStorage.setItem("items", 0);
              router.push("/play/" + items[0]);
            }
          } else if (!opts.both) {
            if (intermissionItems[localStorage.getItem("intermissionCount")]) {
              router.push(
                "/play/" +
                  intermissionItems[localStorage.getItem("intermissionCount")]
              );
            } else if (
              !intermissionItems[localStorage.getItem("intermissionCount")]
            ) {
              localStorage.setItem("intermissionCount", 0);
              router.push("/intermission/" + intermissionItems[0]);
            }
            setTimeout(() => {
              router.reload();
            }, 100);
          }
          setTimeout(() => {
            router.reload();
          }, 100);
        }, 10 * 1000);
      };
      if (videoRef.readyState >= 2) {
        func();
      } else {
        videoRef.current.addEventListener("loadedmetadata", func);
      }
    }
  }, [src, videoRef.current, opts]);
  return (
    <>
      <Circle index={false}>
        <Video ref={videoRef} id={src} />
      </Circle>
      <Countdown time={10} />
    </>
  );
}

export default Player;
