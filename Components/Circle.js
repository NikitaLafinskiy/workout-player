import styles from "../styles/components/circle.module.css";
import Link from "next/link";

const Circle = (props, ref) => {
  const styleID = props.index ? styles.circle : styles.videoCircle;
  return <div id={styleID}>{props.children}</div>;
};

export default Circle;
