import React from "react";
import styles from "../styles/components/button.module.css";

export default function FormInput(props) {
  return (
    <button onClick={props.handleClick} style={props.style} id={styles.button}>
      {props.children}
    </button>
  );
}
