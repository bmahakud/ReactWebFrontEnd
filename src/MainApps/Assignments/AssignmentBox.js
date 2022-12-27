import classes from "./Pending.module.css";
import classes2 from "./Completed.module.css";
import classes3 from "./All.module.css";
import { HiDotsVertical } from "react-icons/hi";
import { GrScorecard } from "react-icons/gr";
import { MdDoubleArrow } from "react-icons/md";

const AssignmentBoxPending = (props) => {
  return (
    <div className={classes.assignmentBox}>
      <div className={classes.headSectionDiv}>
        <div>
          <span className={classes.courseId}>{props.oneAssignment.id}</span>
          <span className={classes.assignmentTitle}>
            <span>{props.oneAssignment.title}</span>
          </span>
        </div>
        <div>
          <span className={classes.status}>
            {props.oneAssignment.status_}Ongoing
          </span>
          <span className={classes.threeDots}>
            <HiDotsVertical />
          </span>
        </div>
      </div>

      <div className={classes.secondSection}>
        <div className={classes.leftLowerDiv}>
          <div className={classes.AssignBy}>
            by:
            <span style={{ fontSize: "14px", color: "#1b1e24" }}>
              {/* {props.oneAssignment.creater}  */} Durga Shankar Das Mangaraj
            </span>
            <div className={classes.dateInfo}>
              <div className={classes.startDate}>
                <span>
                  Start Date:
                  <span className={classes.infoDate}>
                    &nbsp;{props.oneAssignment.publishDate}
                  </span>
                </span>
              </div>
              <div className={classes.dueDate}>
                Due Date:
                <span className={classes.infoDate}>
                  &nbsp;{props.oneAssignment.dueDate}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.rightLowerDiv}>
          {/* <button type="button" className={classes.uploadButton}>
            <b>Upload</b>
          </button> */}
          <button type="button" className={classes.viewAssignmentButton}>
            <span style={{ paddingLeft: "10%" }}>View Detail</span>
            <MdDoubleArrow className={classes.viewdetailIcon} />
          </button>
        </div>
      </div>
      <div className={classes.thirdLeftDiv}>
        <span>
          <GrScorecard style={{ fontSize: "12px" }} /> Total Credit:
        </span>
        <span className={classes.tubeIconText}>
          &nbsp;{props.oneAssignment.credit}
        </span>
      </div>
    </div>
  );
};

export default AssignmentBoxPending;
