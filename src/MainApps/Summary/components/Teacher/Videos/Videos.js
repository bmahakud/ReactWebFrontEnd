import React,{useState,useEffect, useRef} from "react";
import classes from './Videos.module.css';
import OneVideoBox from './OneVideoBox';
import OneVideoReactPlayer from './OneVideoReactPlayer';
import {BsUpload, BsYoutube} from 'react-icons/bs';
import {AiOutlineLink} from 'react-icons/ai';
import OutsideAlerter from '../../../../../CommonApps/OutsideAlerter';
import CourseEditForm from './Forms/CourseEditForm';
import {getvideosbyCourseId} from '../../../../../CommonApps/AllAPICalls';

import {AiOutlineDoubleRight, AiOutlineDoubleLeft} from 'react-icons/ai';

const Videos=(props)=>{


    console.log("Videos rendering ");

    const [showAddVideoOptions, setShowAddVideoOptions] = useState(false); 
    const [showAddVideoForm, setShowAddVideoForm] = useState(false);

    const [videosData, getVideosData]=useState(null);
    const [pageNo , setPageNo] = useState(1);



    const addVideoHandler=()=>{

      setShowAddVideoOptions(showAddVideoOptions=>!showAddVideoOptions);

    }

   const addYoutubeVideoHandler=()=>{
    
     setShowAddVideoForm(true);

   }

   const closeFormHandler=()=>{
    setShowAddVideoForm(false);
    props.rerender();
   }

   useEffect(()=>{
    console.log("new pageNo", pageNo);	   
    let courseId = props.selectedCourse[0].id;
    getvideosbyCourseId({ pageNo, courseId, getVideosData});

   },[props.userData, pageNo]);


    useEffect(()=>{
       if( videosData !==null && videosData.next !==null){
          setPageNo(pageNo=>pageNo+1);
	  //props.setVideoPageNo(pageNo=>pageNo+1);
       }


    },[props.reachedBottom]);


    useEffect(()=>{
       if( videosData !==null && videosData.previous !==null){
          setPageNo(pageNo=>pageNo-1);
	  //props.setVideoPageNo(pageNo=>pageNo-1);
       }


    },[props.reachedTop]);






    const prevButtonHandler=()=>{

    }

   const nextButtonHandler=()=>{

   }

  const middleButtonHandler=()=>{

  }	





   console.log("reachedBottom ", videosData);



return (
<div className={classes.videos} >

  <div className={classes.toolsDiv}> 
     

    { showAddVideoForm && 
    <CourseEditForm userData={props.userData}
	            Course={props.selectedCourse[0]}
	            rerender={props.rerender}
	            onPress={closeFormHandler}
	            />
    }


     
     <button type="button" className={classes.uploadButton} onClick={addVideoHandler}> + Add a video </button>
      
     {/*
     <div className={classes.pageNos}> 
        <button type="button" className={classes.leftNavButton} onClick={prevButtonHandler}><AiOutlineDoubleLeft/></button>
	<button type="button" className={classes.middleNavButton} onClick={middleButtonHandler}>9</button>
	<button type="button" className={classes.rightNavButton} onClick={nextButtonHandler}><AiOutlineDoubleRight/></button>
     </div>
     */}

     { showAddVideoOptions &&

     <OutsideAlerter setDropDown={setShowAddVideoOptions}>	     
     <div className={classes.addVideoOptions}> 
	<button type="button" className={classes.videoOptionButton}>
	     <BsUpload className={classes.uploadIcon}/> Upload from your computer
	</button>

	<button type="button" className={classes.videoOptionButton} onClick={addYoutubeVideoHandler}> 
	     <BsYoutube className={classes.youtubeIcon}/>Add a youtube video 
	</button>

     </div>
     </OutsideAlerter>	     
     }	     
  </div>


  <div className={classes.videoBoxContainer}>

     { /*props.selectedCourse[0].videos.map((video, index)=>{

              return <OneVideoBox key={index}
	                          video={video}
		     />
        })
    
        this will be used in future in performance issues aries 
     */}
   

     { videosData !==null && videosData.results.map((video, index)=>{

                return <OneVideoBox key={index}
	                            video={video}
		        />

               })

     }



  </div>



</div>
);

}

export default Videos;
