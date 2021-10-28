import React, { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import FormInput from '../Components/FormInput';
import FormWrapper from '../Components/FormWrapper';
import Button from '../Components/Button';
import styles from '../styles/modify.module.css';

function Index(props) {
  const [state, setState] = useState({
    both: false,
    full: true,
  });
  const [forms, setForms] = useState(null);
  const handleChangeCheckbox = (e) => {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.checked,
      };
    });
    console.log(e.target.checked);
  };

  useEffect(() => {
    const { both, full } = state;
    both
      ? full
        ? setForms(
            <>
              <FormInput placeholder="The first playlist's link: " />
              <FormInput placeholder="The second playlist's link: " />
            </>
          )
        : setForms(
            <>
              <FormInput placeholder="The first playlist's link: " />
              <FormInput placeholder="The second playlist's link: " />
              <FormInput placeholder='Time for a song from the first playlist to play for: ' />
              <FormInput placeholder='Time for a song from the second playlist to play for: ' />
            </>
          )
      : full
      ? setForms(
          <>
            <FormInput placeholder="The playlist's link: " />
          </>
        )
      : setForms(
          <>
            <FormInput placeholder="The playlist's link: " />
            <FormInput placeholder='Time for a song from the playlist to play for: ' />
          </>
        );
  }, [state]);

  const out = forms ? forms : <></>;
  return (
    <>
      <FormWrapper>
        <h1>Options: </h1>
        <div className={styles.checkbox}>
          <input
            name='both'
            onChange={handleChangeCheckbox}
            defaultChecked={state.both}
            type='checkbox'
          />
          <p>Two playlists</p>
        </div>
        <div className={styles.checkbox}>
          <input
            name='full'
            onChange={handleChangeCheckbox}
            defaultChecked={state.full}
            type='checkbox'
            type='checkbox'
          />
          <p>Play full songs</p>
        </div>
        {out}
        <Button> Submit</Button>
      </FormWrapper>

      <Image src='/images/landing.svg' alt='landing image' layout='fill' />
    </>
  );
}

export default Index;
