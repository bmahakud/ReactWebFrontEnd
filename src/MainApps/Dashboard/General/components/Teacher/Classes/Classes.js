import React,{useState, useEffect, useRef} from 'react';
import classes from './Classes.module.css'

import buttonStyle2 from '../../../../../../CommonApps/buttonStyle2.module.css';


import ClassesContainer from './ClassesContainer';


const Classes=(props)=>{

   const isMounted = useRef(false);

   useEffect(() => {
     isMounted.current = true;
     props.passMountInfo(true);
     return () => {
            isMounted.current = false
            props.passMountInfo(false);
     }
   }, [props]);


 
  const [showCreateClassForm, setShowCreateClassForm] = useState(false);




return (

<div className={classes.classes}>

   <div className={classes.switchBar}>
	<button className={buttonStyle2.buttonStyle2} type="button" onClick={()=>setShowCreateClassForm(true)}>
           <b>  +Create a class </b>
        </button>

   </div>


   	
   <ClassesContainer/>




</div>

);

}

export default Classes;
