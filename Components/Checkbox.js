import React from "react";

export default function Checkbox() {
  return (
    <div className={styles.checkbox}>
      <input type='checkbox' /> <p>{props.header}</p>
    </div>
  );
}
