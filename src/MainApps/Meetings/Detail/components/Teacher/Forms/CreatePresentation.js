import React,{useState,useEffect} from "react";
import classes from "./EditMeetingForm.module.css";
import {AiFillCloseCircle} from "react-icons/ai";
import logoImage from '../../../../../../CommonApps/BWlogo.JPG'
import {getuser, putuser, putuserprofile, putmeetinginfo, getusersfromnames, createnewpresentation} from '../../../../../../CommonApps/AllAPICalls';

import {TimeField, TextInput, TextInput2, TextInput3, OptionField2, DateField2, DayField} from './FormInputObjects'; 




const convertAndAddto24hourFormat=({ formData })=>{
          
            let ampm = formData.selectedampm;
            let minute = formData.selectedminute;
            let hour = formData.selectedhour;
            if(ampm==="pm"){
              hour=Number(hour)+12;
            }

            //let time=hour+':'+minute+':'+'00';
            let time =`${hour}:${minute}:00`;
            let timestr= time.toString();
            formData["talktime"]=timestr;
          
}



const AboutEditForm=(props)=>{



    const [data, setData ] = useState({});

    useEffect(() =>{
     getuser({setData});
    },[]);


    const initialFormData = Object.freeze({
             talktitle: "",
             talktime: "00:00:00",
             duration: null,
             speaker: null,
             outspeaker: null,
	     meetingId:props.meeting.id


    });



    const [formData, updateFormData] = useState(initialFormData)

    const handleChange = (e) => {
                updateFormData({
                        ...formData,
                        [e.target.name]: e.target.value.trim(),
                });
        };



   const [pptCreated, setPptCreated] = useState(false);


    const handleSubmit = (e) => {
		e.preventDefault();

                if(formData["talktitle"] ===""){
                   alert("please enter talk title");

		}


                



                let meetingid = props.meeting.id;

                //console.log("formData: ", formData);
	        //formData["classdate"] = "13:13:13"
                let hourset=false;
	        let minset=false;
	        let ampmset=false;

	        if(("selectedhour" in formData)){
			hourset=true;
                }

                if(("selectedminute" in formData)){
                        minset=true;
                }
                
	         if(("selectedampm" in formData)){
                        ampmset=true;
                }


               if( !hourset || !minset || !ampmset){

                alert("Time not set properly!!");
	       }


               if(formData["duration"] === null){
                   alert("please choose talk duration");

                }

                if(Object.keys(addedUser).length !== 0){
                  formData["speaker"] = addedUser.id;
		}
	        

                if(formData["speaker"] === null){

                 alert("Please choose one speaker");

		}



 
                if(hourset && minset && ampmset){
                convertAndAddto24hourFormat({ formData });
                }

                //console.log("formData create ppt: ", formData)


                createnewpresentation({formData});

	        //props.userDataUpdated(true);
	       // window.location.reload(false);
	        props.onPress();
	};


   let intervals = ["scheduled","postponed","cancelled"]

   let timeintervals = [0,5,10,15,20,25,30,40,50,60,90,120,180]
  

   const [searchUsers, getSearchUsers] = useState([])

   const handleChangeSearch=(e)=>{

     let namestring = e.target.value;
     getusersfromnames({namestring, getSearchUsers});

   }


   //console.log("search users: ",searchUsers)

   const [addedUser, setAddedUser] = useState({});


   const selectSpeakerHandler=({user})=>{
       //console.log("userid: ",user.id);
       setAddedUser(addedUser=>user);	   
   }



    //console.log("formData create presentation: ", formData);

    //console.log("added user: ", addedUser);


return(

<div className={classes.aboutEditFormDivParent}>


  <form className={classes.aboutEditForm} onSubmit={handleSubmit} style={{height:"90vh"}}>



      <div className={classes.closeButtonDiv}>
          <button onClick={props.onPress} className={classes.closeFormButton}> <AiFillCloseCircle className={classes.closeButtonIcon}/> </button>
      </div>	


      <div className={classes.logoAndTitleContainer}>
    	   <img  className={classes.bwLogo} src={logoImage} alt='edr Logo' />
           <div className={classes.titleDiv}><i style={{fontStyle:"normal"}}>  Add a new talk: Meeting ID {props.meeting.id}  </i></div>
      </div>


      <TextInput2 handleChange={handleChange} 
	     label="Title of the talk" 
	     name="talktitle" 
	     placeholder="Enter title"  
	     defaultValue={""}
	   />

       
      <TimeField handleChange={handleChange}
                     label="Talk time"
                     selectedhour = "selectedhour"
                     selectedminute = "selectedminute"
                     selectedampm = "selectedampm"
                     placeholder="Enter a time"
                />
       

      <OptionField2 handleChange={handleChange}  
	            label="Talk duration" 
	            name="duration"  
	            options={timeintervals} 
	            defaultValue={""}/>
      

     <TextInput3 handleChange={handleChangeSearch} 
	         label="Add speaker" 
	         name="speaker" 
	         placeholder="Search by firstname"  
	         defaultValue={""}
	         searchUsers={searchUsers}
	         selectedSpeaker={selectSpeakerHandler}
	         addedUser={addedUser}
	      />




     <div className={classes.submitButtonDiv}>
          <button type="submit"  className= {classes.submit_button} ><b>Save </b> </button>

     </div>




  </form>



</div>	
);

}


export default AboutEditForm;
