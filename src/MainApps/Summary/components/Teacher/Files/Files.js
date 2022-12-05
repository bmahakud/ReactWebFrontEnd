import React,{useState, useEffect} from 'react';
import classes from './Files.module.css';
import {BsUpload} from 'react-icons/bs';
import {AiOutlineLink} from 'react-icons/ai';
import OutsideAlerter from '../../../../../CommonApps/OutsideAlerter';
import OneFile from './OneFile';



import {getfilesbyCourseId} from '../../../../../CommonApps/AllAPICalls';



const Files=(props)=>{


    console.log("Files rendeering ");
    const [showAddFileOptions, setShowAddFileOptions] = useState(false);


    const addFileHandler=()=>{

      setShowAddFileOptions(showAddFileOptions=>!showAddFileOptions);

    }

    const [filesData, getFilesData]=useState(null);
    const [pageNo , setPageNo] = useState(1);

    useEffect(()=>{
    let courseId = props.selectedCourse[0].id;
    getfilesbyCourseId({ pageNo, courseId, getFilesData});

   },[props.userData, pageNo]);  



   console.log("filesData: ", filesData !==null ? filesData.results:null);



return (
<div className={classes.files}>

     <div className={classes.toolsDiv}>

     <button type="button" className={classes.uploadButton} onClick={addFileHandler}> + Add a file </button>

     { showAddFileOptions &&

     <OutsideAlerter setDropDown={()=>setShowAddFileOptions(false)}>	     
     <div className={classes.addFileOptions}>
        <button type="button" className={classes.fileOptionButton}>
             <BsUpload className={classes.uploadIcon}/> Upload from your computer
        </button>

        <button type="button" className={classes.fileOptionButton}>
             <AiOutlineLink className={classes.youtubeIcon}/>Add a external link
        </button>

     </div>

     </OutsideAlerter>
	     
     }
  </div>




    <div className={classes.videoBoxContainer}>

        <OneFile/>
	<OneFile/>
	<OneFile/>
	<OneFile/>
   </div>





</div>
);

}

export default Files;
