import React,{useState, useEffect} from "react";
import classes from "./EduDegreeForm.module.css";
import {AiFillCloseCircle} from "react-icons/ai";
import logoImage from '../../../../../CommonApps/BWlogo.JPG'
import {OptionField,OptionFieldSubmitValue,OptionFieldSecondaryObjs, ParagraphField,TextInput, DateField} from './FormInputObjects';
import {getdegreenames, getinstitutenames, getuser, createedudegree} from '../../../../../CommonApps/AllAPICalls.js';
//import FadeLoader from "react-spinners/FadeLoader";
//import { css } from "@emotion/react";


/*const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;*/



const CreateCourseForm=(props)=>{


//const [loading, setLoading] = useState(true);
//const [color, setColor] = useState(" var(--themeColor)");

   const [data, setData] = useState({});

   const [degreeNames, getDegreeNames] = useState([{"id": 99999999,"name": "Unable to fetch ticket category"}]);

   const [instituteNames, getInstituteNames] = useState([{"id": 99999999,"name": "Unable to fetch ticket category"}]);

   const [selectedBoardName, setSelectedBoardName] = useState("");

   const [subjectsObject,setSubjectsObject] = useState([{name:null}]);

   const [formSubmitted,setFormSubmitted] = useState(false);


   useEffect(() =>{
     getdegreenames({getDegreeNames});
   },[])


   useEffect(() =>{
    getinstitutenames({getInstituteNames});
   },[])


   useEffect(()=>{
     getuser({setData});
   },[]);




const initialFormData = Object.freeze({
        
        institute: null,
        degreename: null,
        startDate: null,
        endDate: null

        });



const [formData, updateFormData] = useState(initialFormData);

const handleChange1 = (e) => {

	//setClassId(classId=>e.target.value);
        updateFormData({
                        ...formData,
                        [e.target.name]: e.target.value.trim(),
                });
        };







const handleSubmit = (e) => {
	  e.preventDefault();
	  //setShowForm(false);
	   
          if(formData.degreename===null){
		  alert('please enter degree name');
		  return null;
	  }

          if(formData.institute===null){
                  alert('please enter name of the institute');
                  return null;
          }


	  if(formData.startDate===null){
                  alert('please enter start date');
                  return null;
          }

          if(formData.endDate===null){
                  alert('please enter end date');
                  return null;
          }



         //setTimeout(() => {console.log('Hello, World!')}, 5000);
         // setShowForm(false);

         createedudegree({formData, data});
	 //alert("Succssfully submitted");
	 //window.location.reload(true);
	 //alert("Successfully submitted");
	 // setShowForm(true);

         props.onPress();

         //setFormSubmitted(!formSubmitted);


	 //return new Promise(resolve => {
         //    setTimeout(() => {
         //        resolve();
         //    }, 2000);
         //});
	
	
	};








return(

<div className={classes.createTicketFormDivParent}>

   {/*!showForm &&  
	   <div className={classes.createTicketFormLoading}>

	   <FadeLoader color={color} loading={loading} css={""} size={50}  />
	    
	   <div className={classes.submittingDiv}> Creating . . . </div>
           </div>
   */}


   { 	
  <form className={classes.createTicketForm} onSubmit={handleSubmit}>

       {/*form close button below*/}	
       <div className={classes.closeButtonDiv}>
          <button onClick={props.onPress} className={classes.closeFormButton}> <AiFillCloseCircle className={classes.closeButtonIcon}/> </button>
       </div>	

 
       {/*logo and field title container below*/}
       <div className={classes.logoAndTitleContainer}>
	  <img  className={classes.bwLogo} src={logoImage} alt='edr Logo' />
           <div className={classes.formTitleDiv}><i>  Add a degree </i></div>
       </div>



       <OptionField handleChange={handleChange1}  label="Choose a degree" name="degreename"  options={degreeNames}/>

       <OptionField handleChange={handleChange1}  label="Choose a degree" name="institute"  options={instituteNames}/>

      
       <DateField handleChange={handleChange1} label="Start date" name="startDate" placeholder="Enter degree start date"   />

       <DateField handleChange={handleChange1} label="End date" name="endDate" placeholder="Enter degree end date"   />





       <div className={classes.submitButtonDiv}>
       
           <button type="submit"  className= {classes.submit_button} ><b>Create </b> </button>

       </div>




  </form>

   }


</div>	
);

}


export default CreateCourseForm;
