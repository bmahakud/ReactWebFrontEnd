import React,{useState, useEffect} from "react";
import classes from './EnrollForm.module.css'
import {AiFillCloseCircle} from "react-icons/ai";
//import {BsCheckLg} from 'react-icons/bs';
import logoImage from '../../../../../../CommonApps/BWlogo.JPG'
import {TextInput} from './EnrollFormInput';

import {putcourseenrollrequest, getuser} from '../../../../../../CommonApps/AllAPICalls';



const EnrollForm =(props)=>{


   const initialFormData = Object.freeze({
         enrollmessage: "",
        });

   const [formData, updateFormData] = useState(initialFormData)


   const [buttonStyle, setButtonStyle] = useState({
	text:'Send',
        disable: false,
	bkgColor: 'var(--themeColor)',
	displayTextArea: true,
   });



   const handleSubmit=(e)=>{
      e.preventDefault();
      let courseId = props.Course.id;	
      let userId = props.userData.id;	
      putcourseenrollrequest({courseId});
      setButtonStyle({
          text:'Sent',
          disable: true,
          bkgColor: 'grey',
          displayTextArea: false,
      });

       setTimeout(() => {
         closeFormHandler(e);	
       }, 2000);

   }

   const closeFormHandler=(e)=>{
      e.preventDefault();
      props.onPress();
   }


   const handleChange =(e)=>{
       updateFormData({
                        ...formData,
                        [e.target.name]: e.target.value.trim(),
                     });
   }







return (

<div className={classes.enrollFormParent}>



  <form className={classes.enrollForm} onSubmit={handleSubmit}>

    <div className={classes.closeButtonDiv}>
        <button onClick={closeFormHandler} className={classes.closeFormButton}> <AiFillCloseCircle className={classes.closeButtonIcon}/> </button>
    </div>


    <div className={classes.logoAndTitleContainer}>
          <img  className={classes.bwLogo} src={logoImage} alt='edr Logo' />
           <div className={classes.formTitleDiv}><i>  Send enrollment request </i></div>
    </div>

    <div className={classes.courseInfo}> 
      <div>  CODE: {props.Course.courseGlobalCode}  </div>

      <div> INSTRUCTOR: {props.Course.teacher.firstname} {props.Course.teacher.lastname}  </div>

    </div>



   <TextInput 
	handleChange={handleChange} 
	label="Write message" 
	placeholder="I would like to enroll in your course. Please approve. Thanks, John" 
	name="enrollmessage"
	/>




    <div className={classes.submitButtonDiv}>
          <button type="submit"  className= {classes.submit_button} disabled={buttonStyle.disable} style={{backgroundColor: buttonStyle.bkgColor}}>
	    <b>{buttonStyle.text} </b> 
	  </button>

    </div>



  </form>






</div>

);

}
export default EnrollForm;
