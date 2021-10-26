import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import FormInput from "../Components/FormInput";
import FormWrapper from "../Components/FormWrapper";
import Button from "../Components/Button";
import styles from "../styles/modify.module.css";

function Index(props) {
  return (
    <>
      <FormWrapper>
        <h1>Options: </h1>
        <div className={styles.checkbox}>
          <input type='checkbox' /> <p>Two playlists</p>
        </div>
        <div className={styles.checkbox}>
          <input type='checkbox' /> <p>Play full songs</p>
        </div>
        <FormInput placeholder="The first playlist's link: " />
        <FormInput placeholder="The second playlist's link: " />
        <FormInput placeholder='Time for a song from the first playlist to play for: ' />
        <FormInput placeholder='Time for a song from the second playlist to play for: ' />
        <Button> Submit</Button>
      </FormWrapper>

      <Image src='/images/landing.svg' alt='landing image' layout='fill' />
    </>
  );
}

export default Index;
