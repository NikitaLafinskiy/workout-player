import { useState, useEffect } from 'react';
import styles from '../styles/components/countdown.module.css';

const Countdown = (props, ref) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTime((prev) => {
        return prev + 100 / parseInt(props.time) / parseInt(props.time);
      });
    }, (100 / props.time) * 10);
  }, [null]);
  return (
    <div id={styles.countdownWrap}>
      <div id={styles.bar} style={{ width: 100 - time + '%' }}></div>
    </div>
  );
};

export default Countdown;
