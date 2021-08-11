import { forwardRef } from 'react';
const Video = (props, ref) => {
  //   console.log(ref);
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <video
        ref={ref}
        data-yt2html5={`https://www.youtube.com/watch?v=${props.id}`}
        autoPlay
        width='100%'
        height='100%'
        playsInline
        muted={props.mute}></video>
    </div>
  );
};

export default forwardRef(Video);
