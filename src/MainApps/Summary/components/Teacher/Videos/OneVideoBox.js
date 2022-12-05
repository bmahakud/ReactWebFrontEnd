
import React from 'react';
import classes from './OneVideoBox.module.css';
import ReactPlayer from 'react-player';

const OneVideoBox=(props)=>{


return (

<div className={classes.oneVideoBox}>
	{/*
       <iframe
        src="https://www.youtube.com/embed/TedGJlmQfaU"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
	className={classes.iframestyle}
      />
      */}
     <ReactPlayer url={props.video.link} width="100%" height="100%" controls={true} />



   
   <div className={classes.videoInfoBox}>
 
      <div> <b>{props.video.name}</b></div>
      <div style={{color: "grey"}}> {props.video.description}</div>
      

   </div>
   
</div>

);




}

export default OneVideoBox;
