import { forwardRef } from 'react';
const Video = (props, ref) => {
  //   console.log(ref);
  return (
    <>
      <video
        ref={ref}
        data-yt2html5={`https://www.youtube.com/watch?v=${props.id}`}
        autoPlay
        // width='100%'
        // height='100%'
        playsInline
        muted={props.mute}></video>
    </>
  );
};

export default forwardRef(Video);
