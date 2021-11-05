import React, { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import FormInput from '../Components/FormInput';
import FormWrapper from '../Components/FormWrapper';
import Button from '../Components/Button';
import styles from '../styles/modify.module.css';
import { useRouter } from 'next/router';

function Index(props) {
  const router = useRouter();
  const [state, setState] = useState({
    both: false,
    full: true,
    playlist1: '',
    playlist2: '',
    time1: '',
    time2: '',
  });
  const [forms, setForms] = useState(null);
  const handleClick = () => {
    const { playlist1, playlist2, time1, time2 } = state;
    const opts = JSON.stringify({
      both: state.both,
      full: state.full,
      playlist1,
      playlist2,
      time1,
      time2,
    });
    localStorage.setItem('opts', opts);
    router.push('/');
  };
  const handleChange = (e) => {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

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
              <FormInput
                handleChange={handleChange}
                name='playlist1'
                placeholder="The first playlist's link: "
                value={state.playlist1}
              />
              <FormInput
                handleChange={handleChange}
                name='playlist2'
                placeholder="The second playlist's link: "
                value={state.playlist2}
              />
            </>
          )
        : setForms(
            <>
              <FormInput
                handleChange={handleChange}
                name='playlist1'
                placeholder="The first playlist's link: "
                value={state.playlist1}
              />
              <FormInput
                handleChange={handleChange}
                name='playlist2'
                placeholder="The second playlist's link: "
                value={state.playlist2}
              />
              <FormInput
                handleChange={handleChange}
                name='time1'
                placeholder='Time for a song from the first playlist to play for: '
                value={state.time1}
              />
              <FormInput
                value={state.time2}
                handleChange={handleChange}
                name='time2'
                placeholder='Time for a song from the second playlist to play for: '
              />
            </>
          )
      : full
      ? setForms(
          <>
            <FormInput
              name='playlist1'
              value={state.playlist1}
              handleChange={handleChange}
              placeholder="The playlist's link: "
            />
          </>
        )
      : setForms(
          <>
            <FormInput
              name='playlist1'
              handleChange={handleChange}
              value={state.playlist1}
              placeholder="The playlist's link: "
            />
            <FormInput
              name='time1'
              handleChange={handleChange}
              value={state.time1}
              placeholder='Time for a song from the playlist to play for: '
            />
          </>
        );
  }, [state]);

  const out = forms ? forms : <></>;
  return (
    <>
      <div id={styles.background_low}></div>
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
        <Button handleClick={handleClick}> Submit</Button>
      </FormWrapper>

      <Image src='/images/landing.svg' alt='landing image' layout='fill' />
    </>
  );
}

export default Index;
