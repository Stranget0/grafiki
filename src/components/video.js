import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
const YoutubeEmbed = ({ videoId, title }) => {
  const { ref, inView, entries } = useInView({ threshold: 0.1 });
  const isShown = useRef(false);
  useEffect(() => {
    if (inView) isShown = true;
  }, [inView]);
  console.log({ ref, inView, entries });
  return (
    <div className='video video-responsive'>
      {isShown && (
        <iframe
          width='100%'
          // height="480"
          src={`https://www.youtube.com/embed/${videoId}?origin=https://grafikimaster.gatsbyjs.io/&enablejsapi=1`}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title={title}
        />
      )}
    </div>
  );
};

export default YoutubeEmbed;
