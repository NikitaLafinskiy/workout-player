import React from "react";
import styles from "../styles/components/input.module.css";

export default function FormInput(props) {
  return (
    <input
      id={styles.input}
      style={props.style}
      onChange={props.handleChange}
      value={props.value}
      placeholder={props.placeholder}
      name={props.name}
    />
  );
}
