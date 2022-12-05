import React from 'react';
import classes from '../Advanced/UnitBarInstDegree.module.css';
import {BsTrash} from 'react-icons/bs'

import {deleteedudegree} from '../../../../CommonApps/AllAPICalls';

import iitdlogo from './IITDLogo.png';



const UnitBarInstDegree = (props)=>{




const deleteEduDegreeHandler=()=>{

//let edudegreeid = props.achievementId;


//deleteedudegree({edudegreeid});

//window.location.reload(false);	

}




return (

<div className={classes.unitBarInstDegree}>


    
   <div className={classes.degreeInfoall}>

      <div className={classes.InstLogo}> 
         <img src={props.logo}  className={classes.logoImage} />
      </div>

     <div className={classes.InstInfo}> 

      <div className={classes.InstInfo__degree}>
	<b>{props.achievementname}</b>
      </div>


      <div className={classes.InstInfo__duration}>
	{props.duration}
      </div>




    </div>

  </div>



   <button className={classes.deleteDegree} onClick={deleteEduDegreeHandler}>
      <BsTrash/>

   </button>

</div>
);


}
export default UnitBarInstDegree;
