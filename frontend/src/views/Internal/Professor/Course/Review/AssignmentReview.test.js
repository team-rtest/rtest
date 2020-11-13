import { getGradeList, getMedian } from "../../Review/AssignmentReviewHelper";
const submissions = [
  {
    student: {
      firstName: "Jack",
      lastName: "Frumkes",
    },
    files: [],
    submittedAt: 1601484990,
    grade: 87,
    peerGrades: [],
  },
  {
    student: {
      firstName: "Simon",
      lastName: "Marty",
    },
    files: [],
    submittedAt: 1601484990,
    grade: 100,
    peerGrades: [],
  },
  {
    student: {
      firstName: "Luis",
      lastName: "Flores",
    },
    files: [],
    submittedAt: 1601484981,
    grade: 91,
    peerGrades: [],
  },
];
test("should return a list of grades", () => {
  expect(getGradeList(submissions)).toStrictEqual([87, 100, 91]);
});
test("should return the median of the list of grades", () => {
  expect(getMedian(getGradeList(submissions))).toStrictEqual(91);
});
test("should return the median of the given list", () => {
  expect(getMedian([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])).toEqual(6.5);
});
