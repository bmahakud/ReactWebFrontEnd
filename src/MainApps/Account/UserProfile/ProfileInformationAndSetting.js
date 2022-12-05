import React,{useState} from 'react';
import classes from "./ProfileInformationAndSetting.module.css";
import UserProfileSwitchBar from './UserProfileSwitchBar';
import UserProfileContentBasic from './Basic/UserProfileContentBasic';
import UserProfileContentAdvanced from './Advanced/UserProfileContentAdvanced';
import UserProfileContentGrades from './Grades/UserProfileContentGrades';
import UserProfileContentFriends from './Friends/UserProfileContentFriends';


const ProfileInformationAndSetting=(props)=>{


const [basic,setBasic] = useState(true);
const [advanced,setAdvanced] = useState(false);
const [grades,setGrades] = useState(false);
const [friends, setFriends] = useState(false);



const [style,setStyle] = useState({ 
	     basic:  {color:"white",backgroundColor:"#7097e0"},
             advanced:  {color:"var(--themeColor)",backgroundColor:"#c0d0ed"},
             grades:  {color:"var(--themeColor)",backgroundColor:"#c0d0ed"},
	     friends:  {color:"var(--themeColor)",backgroundColor:"#c0d0ed"},
             }
    );





const setAdvanceToTrue=()=>{

  setBasic(false);
  setGrades(false);	
  setFriends(false);	
  setAdvanced(true);

  setStyle({    basic:  {color:"var(--themeColor)",backgroundColor:"#c0d0ed"},
                advanced:  {color:"white",backgroundColor:"#7097e0"},
                grades:  {color:"var(--themeColor)",backgroundColor:"#c0d0ed"},
	        friends:  {color:"var(--themeColor)",backgroundColor:"#c0d0ed"},
             });

  }


const setGradesToTrue=()=>{

  setBasic(false);
  setAdvanced(false);
  setFriends(false);	
  setGrades(true);
  setStyle({    basic:  {color:"var(--themeColor)",backgroundColor:"#c0d0ed"},
                grades:  {color:"white",backgroundColor:"#7097e0"},
                advanced:  {color:"var(--themeColor)",backgroundColor:"#c0d0ed"},
	        friends:  {color:"var(--themeColor)",backgroundColor:"#c0d0ed"},
             });


  }	


const setBasicToTrue=()=>{

  setAdvanced(false);
  setGrades(false);
  setBasic(true);
  setFriends(false);	
  setStyle({    advanced:  {color:"var(--themeColor)",backgroundColor:"#c0d0ed"},
                basic:  {color:"white",backgroundColor:"#7097e0"},
                grades:  {color:"var(--themeColor)",backgroundColor:"#c0d0ed"},
	        friends:  {color:"var(--themeColor)",backgroundColor:"#c0d0ed"},
             });




  }




const setFriendsToTrue=()=>{

  setAdvanced(false);
  setGrades(false);
  setBasic(false);
  setFriends(true);
  setStyle({    advanced:  {color:"var(--themeColor)",backgroundColor:"#c0d0ed"},
                basic:  {color:"var(--themeColor)",backgroundColor:"#c0d0ed"},
                grades:  {color:"var(--themeColor)",backgroundColor:"#c0d0ed"},
                friends:  {color:"white",backgroundColor:"#7097e0"},
             });




  }














return (

<div className={classes.profileInformationAndSetting}>

    	
    <UserProfileSwitchBar onPressAdvanced = {setAdvanceToTrue} 
	                  onPressGrades = {setGradesToTrue} 
	                  onPressBasic = {setBasicToTrue}
	                  onPressFriends = {setFriendsToTrue}
	                  style={style}
                          />

   { basic  && <UserProfileContentBasic  data={props.data} userDataUpdated={props.userDataUpdated} />}

   { advanced  && <UserProfileContentAdvanced  data={props.data} userDataUpdated={props.userDataUpdated} /> }
 
   { grades && <UserProfileContentGrades/> }	
   
    
   {friends && <UserProfileContentFriends userData={props.data}/>}


</div>
);

}


export default ProfileInformationAndSetting;
