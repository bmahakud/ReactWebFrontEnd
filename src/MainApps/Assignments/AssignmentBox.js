import classes from './Pending.module.css';
// import classes2 from './Completed.module.css';
import {RiFileEditFill} from 'react-icons/ri';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import {FaAngleDoubleRight} from 'react-icons/fa';
import {FaHandPointRight} from 'react-icons/fa';


const AssignmentBoxPending=(props)=>{
    return (
        
        <div className={classes.assignmentBox}>
         <div className={classes.box1}>
          <div className={classes.assignment}>
           <strong><FaHandPointRight/> <u>{props.oneAssignment.title}</u></strong>
           <p><strong>Start Date :</strong> {props.oneAssignment.startData}
           </p>
           <p>  <strong>Due Date:</strong> {props.oneAssignment.endDate}</p>
           
           </div>
           <div className={classes.totalCredit}><strong>Total Credit:</strong> {props.oneAssignment.totalCredit}</div>
           <div className={classes.icons}>
           
            <span className={classes.courseid}>{props.oneAssignment.Id}</span>
        <span><RiFileEditFill style={{marginLeft: '10px'}}/></span>
        <span><RiDeleteBin6Fill style={{marginLeft: '10px'}}/></span>
        <div><FaAngleDoubleRight style={{fontSize:'25px', marginTop: '25px', marginLeft:'90px'}}/></div>
           </div>
         
         </div>
         
         <div className={classes.box2}>
          <div><strong>Assign by:</strong> {props.oneAssignment.creater}</div>
          <div><strong>Progress</strong> <progress value="10" max="100"> {props.oneAssignment.progress} </progress></div>
          <div><strong>Status:</strong> <span>{props.oneAssignment.status_}</span></div>
          </div> 
         
         </div>
      
     
    )
};

export const AssignmentBoxCompleted=(props)=>{
    return (
        
        <div className={classes.assignmentBox}>
         <div className={classes.box1}>
          <div className={classes.assignment}>
           <strong><FaHandPointRight/> <u>{props.oneAssignment.title}</u></strong>
           <p><strong>Start Date :</strong> {props.oneAssignment.startData}
           </p>
           <p>  <strong>Due Date:</strong> {props.oneAssignment.endDate}</p>
           
           </div>
           <div className={classes.totalCredit}><strong>Total Credit:</strong> {props.oneAssignment.totalCredit}</div>
           <div className={classes.scored}>Mark Obtained : {props.oneAssignment.scored}</div>
           <div className={classes.icons}>
           
            <span className={classes.courseid}>{props.oneAssignment.Id}</span>
        <span><RiFileEditFill style={{marginLeft: '10px'}}/></span>
        <span><RiDeleteBin6Fill style={{marginLeft: '10px'}}/></span>
        <div><FaAngleDoubleRight style={{fontSize:'25px', marginTop: '25px', marginLeft:'90px'}}/></div>
           </div>
         
         </div>
         
         <div className={classes.box2}>
          <div><strong>Assign by:</strong> {props.oneAssignment.creater}</div>
          <div><strong>Progress</strong> <progress value="100" max="100"> {props.oneAssignment.progress} </progress></div>
          <div><strong>Status:</strong> <span>{props.oneAssignment.status_}</span></div>
          </div> 
         
         </div>
      
     
    )
};

export default AssignmentBoxPending;
