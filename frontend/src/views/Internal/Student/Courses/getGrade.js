
export function getMean(assignments) {
    let num = 0;
    let total = 0;
    assignments.map((assignment) => {
        if (assignment.mySubmission != null && assignment.mySubmission.grade != null) {
            total += assignment.mySubmission.grade / assignment.maxGrade;
            num += 1;
        }
    });
    if (num > 0) {
        total = total*100/num;
        return total;
    }
    return 0;
}

export function getTotal(assignmentGroups) {
    let sum = 0;
    assignmentGroups.map((type) => {
        sum += type.grading.weight * getMean(type.assignments);
    });
    return sum;
}
