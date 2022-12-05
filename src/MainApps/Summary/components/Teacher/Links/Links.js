import React,{useState, useEffect} from 'react';

import classes from './Links.module.css';
import CourseAddLinkForm from './Forms/CourseAddLinkForm';

import {getlinksbyCourseId} from '../../../../../CommonApps/AllAPICalls';




const Links=(props)=>{


   console.log("Links Rendering");

   const [showAddLinkForm, setShowAddLinkForm] = useState(false);

   const [linksData, getLinksData]=useState(null);
   const [pageNo , setPageNo] = useState(1);


    useEffect(()=>{
    console.log("new pageNo", pageNo);
    let courseId = props.selectedCourse[0].id;
    getlinksbyCourseId({ pageNo, courseId, getLinksData});

   },[props.userData, pageNo]);



   const addLinkHandler=()=>{
       setShowAddLinkForm(true);	   
   }


   const openLinkInNewTabHandler=({link_})=>{
       let meetingLink = link_;
       window.open(meetingLink, "_blank") 
   }


   const closeFormHandler=()=>{
    setShowAddLinkForm(false);
    props.rerender();
   }


    console.log("linksData: ", linksData);




return (
<div className={classes.links}>

    <div className={classes.toolsDiv}>

        { showAddLinkForm &&
             <CourseAddLinkForm userData={props.userData}
                    Course={props.selectedCourse[0]}
                    rerender={props.rerender}
                    onPress={closeFormHandler}
                    />
        }



         <button type="button" className={classes.uploadButton} onClick={addLinkHandler}> + Add a link </button>

    </div>




  <ol>

     { linksData !==null && linksData.results.map((linkObj, index)=>{

                let link_=linkObj.link;
                return <li key={index}>
                          <button type="button" className={classes.linkBoxContainer} onClick={()=>openLinkInNewTabHandler({link_})}>
		                 {linkObj.name}
                          </button>
		          <div style={{color: 'grey', marginLeft:'30px'}}>  {linkObj.description}</div>

                        </li>
           




               })

     }









  </ol>	

    




</div>
);

}

export default Links;
