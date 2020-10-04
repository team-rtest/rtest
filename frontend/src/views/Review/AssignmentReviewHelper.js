import { median } from 'mathjs';

export function getGradeList(submissions) {
    return submissions.map(submission => submission.grade);
}

export function getMedian(gradeList) {
    return median(gradeList);
}