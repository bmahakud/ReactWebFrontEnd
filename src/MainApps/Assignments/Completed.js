import classes from './Completed.module.css';
import AssignmentBox from './AssignmentBox';

let AllAssignment =[
  {
    "title": "Assignment One",
"startData": "20th April 2022",
"endDate": "30th May 2022",
"progress": "100",
"creater": "Bibhuprasad Mahakud",
"status_": "Completed",
"Id": "100023",
"totalCredit":"10",
"scored": "7" 

  },
  {
    "title": "Assignment Two",
"startData": "20th April 2022",
"endDate": "30th May 2022",
"progress": "100",
"creater": "Bibhuprasad Mahakud",
"status_": "Completed",
"Id": "100023",
"totalCredit":"10",  
"scored": "7" 
  },
  {
    "title": "Assignment Three",
"startData": "20th April 2022",
"endDate": "30th May 2022",
"progress": "100",
"creater": "Bibhuprasad Mahakud",
"status_": "Completed",
"Id": "100023",
"totalCredit":"10",
"scored": "7"  
  }
  ]

function Completed(){
    return(
      <div className={classes.completeddiv}>
      
      {
        AllAssignment.map((oneAssignment, index)=>{

          return <AssignmentBox key={index} oneAssignment={oneAssignment}/>
          
          })
          
      }

      </div>
    );
};
export default Completed;