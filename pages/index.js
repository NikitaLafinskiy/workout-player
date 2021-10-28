import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import usePlaylist from "../hooks/usePlaylist";
import { PlaylistContext } from "../Contexts/PlaylistContext";
import styles from "../styles/components/circle.module.css";
import Image from "next/image";
// import LandingSVG from '../pages/images/landing.svg';

function Index(props) {
  const key = "AIzaSyCkhQc1Gu6kmb6pYcfArYo75WXgSs_5PFw";
  //'PLy1OvPJDc50Ri963vIYgtnjgPqLTMat_V'

  const { setItems, setIntermissionItems, setAllow } =
    useContext(PlaylistContext);
  const [itemID, setItemID] = useState([]);
  const [intermissionItemID, setIntermissionItemID] = useState([]);

  if (typeof window !== "undefined") {
    const opts = JSON.parse(localStorage.getItem("opts"));
    if (opts) {
      const items = usePlaylist(opts.playlist1, key);
      const itemsIntermission =
        opts.playlist2.length !== 0 ? usePlaylist(opts.playlist2, key) : null;

      const convertToIds = (arr, func) => {
        arr.forEach((obj) => {
          const id = obj.snippet.resourceId.videoId;
          func((prev) => {
            return [...prev, id];
          });
        });
      };
      // console.log(items);
      // console.log(itemsIntermission);
      useEffect(() => {
        if (typeof window !== "undefined") {
          if (items && itemsIntermission) {
            setAllow(true);
            convertToIds(items, setItemID);
            convertToIds(itemsIntermission, setIntermissionItemID);
          } else if (items) {
            setAllow(true);
            convertToIds(items, setItemID);
          }
        }
      }, [items, itemsIntermission, window]);

      localStorage.setItem("count", 0);
      localStorage.setItem("intermissionCount", 0);
    }
  }

  const randomize = (arr) => {
    return arr.sort((a, b) => 0.5 - Math.random());
  };

  const shuffled = randomize(itemID);
  setItems(randomize(itemID));
  setIntermissionItems(randomize(intermissionItemID));

  const playLink = shuffled ? (
    <Link href={`/play/${shuffled[0]}`}>
      <a style={{ height: "100%" }}>
        <Image
          src='/images/note-light-2.svg'
          alt='note image'
          width='1074'
          height='1074'
          layout='intrinsic'
        />
      </a>
    </Link>
  ) : (
    <div></div>
  );

  return (
    <>
      <Image src='/images/landing.svg' alt='landing image' layout='fill' />
      <div id={styles.image}>{playLink} </div>
      <div id={styles.options}>
        <Link href={`/modify`}>
          <a>
            <Image
              src='/images/options.png'
              alt='options image'
              layout='fill'
            />
          </a>
        </Link>
      </div>
    </>
  );
}

export default Index;
