import { median, max, min, mean } from "mathjs";

export function getGradeList(submissions) {
  return submissions.map((submission) => submission.grade);
}

export function getMedian(gradeList) {
  return median(gradeList);
}

export function getMax(gradeList) {
  return max(gradeList);
}

export function getMin(gradeList) {
  return min(gradeList);
}

export function getMean(gradeList) {
  return mean(gradeList);
}
