import React from "react";
import classes from './AboutBasic.module.css';


import UnitBar from './UnitBar';
import UnitBarFirstName from './UnitBarFirstName';
import UnitBarLastName from './UnitBarLastName';
import UnitBarRole from './UnitBarRole';
import UnitBarEMail from './UnitBarEMail';

import UnitBarClass from './UnitBarClass';
import UnitBarSchool from './UnitBarSchool';
import UnitBarCity from './UnitBarCity';
import UnitBarState from './UnitBarState';
import UnitBarCountry from './UnitBarCountry';
import UnitBarTitle from './UnitBarTitle';


import UnitBarGenDOB from './UnitBarGenDOB';
import UnitBarGender from './UnitBarGender';
import UnitBarPosiEmail from './UnitBarPosiEmail';


import UnitAboutIcon from './UnitAboutIcon';
import UnitEducationIcon from './UnitEducationIcon';
import UnitContactIcon from './UnitContactIcon';
import UnitBarInstDegree from './UnitBarInstDegree';



import iitdlogo from './IITDLogo.png';
import tifrlogo from './TIFR-Logo.jpg';
import schoollogo from './SchoolLogo1.jpg';
import collegeLogo from './CollegeLogo.png';
import ouatlogo from './ouatlogo.png';


import checkPng from './checkPng.png';

import UnitBarAchievement from './UnitBarAchievement';

import UnitSkillIcon from '../Advanced/UnitSkillIcon';



const AboutBasic=(props)=>{





//console.log("props.data.educationDegrees: ", props.data.educationDegrees.length);



return (


<div className={classes.about_Basic}>	

	

    <UnitBar/>
    <UnitAboutIcon  userDataUpdated={props.userDataUpdated}/>

  


    <div className={classes.aboutInfoContainer}>



        <div className={classes.InfoBoxLeft}>

	    <UnitBarTitle data={props.data} />
            <UnitBarFirstName data={props.data} />

            <UnitBarLastName data={props.data} />

            <UnitBarRole data={props.data} />


	    <UnitBarGender data={props.data} />

            <UnitBarEMail data={props.data} />

	</div>


        <div className={classes.InfoBoxRight}>


          <UnitBarClass data={props.data} />

          <UnitBarSchool data={props.data} />


          <UnitBarCity data={props.data} />

	  <UnitBarState data={props.data} />

	  <UnitBarCountry data={props.data} />


        </div>



	{/*
        <UnitBarFirstName data={props.data} />

        <UnitBarLastName data={props.data} />

        <UnitBarRole data={props.data} />

        <UnitBarGenDOB data={props.data} />	

        <UnitBarPosiEmail data={props.data} />	
	*/}


    </div>


    <UnitBar/>


  <UnitEducationIcon/>	


     <div className={classes.aboutInfoContainer}>

         <div className={classes.InfoBoxLeft}>


                 { props.data.educationDegrees.length > 0 &&
                    props.data.educationDegrees.map((degree, index)=>{

                    return  <UnitBarInstDegree  key={index}
                                 ddd={degree}
                                 degree={degree.degreename.name}
                                 institute={degree.institute.name}
                                 duration={degree.startDate+" - "+degree.endDate}
                                 place={degree.institute.city+", "+degree.institute.country}
                                 logo={degree.institute.instlogo}
                                 />


                    })



                  }


         </div>

     </div>



   <UnitBar/>

   <UnitSkillIcon userData={props.data}/>

   <div className={classes.aboutInfoContainer}>

     <div className={classes.InfoBoxLeft}>


               {
                    props.data.achievements.map((achievement, index)=>{

                    return  <UnitBarAchievement  key={index}
                                 achievementId={achievement.id}
                                 achievementname={achievement.name}
                                 duration={achievement.startDate+" - "+achievement.endDate}
                                 logo={checkPng}
                                 />





                    })



              }





     </div>	  

   </div>


</div>	

);


}


export default AboutBasic;
