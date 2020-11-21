import {
  getMean,
  getGradeList,
} from "../../Professor/Review/AssignmentReviewHelper";

// export function getMean(assignments) {
//     let num = 0;
//     let total = 0;
//     assignments.map((assignment) => {
//         if (assignment.mySubmission != null && assignment.mySubmission.grade != null) {
//             total += assignment.mySubmission.grade / assignment.maxGrade;
//             num += 1;
//         }
//     });
//     if (num > 0) {
//         total = total*100/num;
//         return total;
//     }
//     return 0;
// }

export function getTotal(assignmentGroups) {
  let sum = 0;
  let weightTotal = 0;
  assignmentGroups.map((type) => {
    var grades = type.assignments
      .filter((a) => {
        if (a.mySubmission == null || a.mySubmission.grade == null) {
          return false;
        }
        return true;
      })
      .map((a) => a.mySubmission.grade);
    weightTotal += (type.grading.weight/100);
    sum += (type.grading.weight/100) * getMean(grades);
  });

  return sum/weightTotal;
}
