import classes from "./Pending.module.css";
import AssignmentBox from "./AssignmentBox";

function Pending(props) {
  console.log("hello", props.assignmentdata);
  return (
    <div className={classes.pendingdiv}>
      {props.assignmentdata !== null &&
        props.assignmentdata.map((oneAssignment, index) => {
          return <AssignmentBox key={index} oneAssignment={oneAssignment} />;
        })}
    </div>
  );
}
export default Pending;
