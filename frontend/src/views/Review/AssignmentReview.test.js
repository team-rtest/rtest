import getGradeList from "AssignmentReviewHelper";

test('should return a list of grades', ()=>{
    const submissions =[
        {
          student: {
              firstName: "Jack",
              lastName: "Frumkes"
          },
          files: [],
          submittedAt: 1601484990,
          grade: 87,
          peerGrades: []
        },
        {
          student: {
              firstName: "Simon",
              lastName: "Marty"
          },
          files: [],
          submittedAt: 1601484990,
          grade: 100,
          peerGrades: []
        },
        {
          student: {
              firstName: "Luis",
              lastName: "Flores"
          },
          files: [],
          submittedAt: 1601484981,
          grade: 91,
          peerGrades: []
        }
      ]
    const grades = getGradeList(submissions)
    expect([87,100,91])
})