import React from "react";
import styles from "../styles/components/form.module.css";

export default function FormInput(props) {
  return <div id={styles.form}>{props.children}</div>;
}
