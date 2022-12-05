import classes from './Pending.module.css';
import AssignmentBox from './AssignmentBox';


let AllAssignment =[
  {
    "title": "Assignment One",
"startData": "20th April 2022",
"endDate": "30th May 2022",
"progress": "10",
"creater": "Durga Shankar Das Mangaraj",
"status_": "Pending",
"Id": "100023",
"totalCredit":"10" 

  },
  {
    "title": "Assignment Two",
"startData": "20th April 2022",
"endDate": "30th May 2022",
"progress": "10",
"creater": "Bibhuprasad Mahakud",
"status_": "Pending",
"Id": "100023",
"totalCredit":"10"  
  },
  {
    "title": "Assignment Three",
"startData": "20th April 2022",
"endDate": "30th May 2022",
"progress": "10",
"creater": "Bibhuprasad Mahakud",
"status_": "Pending",
"Id": "100023",
"totalCredit":"10"  
  }
  ]
  
  

function Pending(){
  console.log('hello',AllAssignment.length);
    return(
       
      <div className={classes.pendingdiv}>
      
      {
        AllAssignment.map((oneAssignment, index)=>{

          return <AssignmentBox key={index} oneAssignment={oneAssignment}/>
          
          })
          
      }

      </div>
    );
};
export default Pending;
