# Front-End Documentation

## To Run From Terminal
Make sure yarn is installed: ([intstallation](https://classic.yarnpkg.com/en/docs/install/))  
Run "yarn" to install dependencies  
Run "yarn start" from the frontend folder to start the frontend  

## Existing Views
**profile** : "/profile"
### When Not Logged in
**Login** : "/login"  
**Signup** : "/signup"
**Forgot Password** : "/forgot-password" (not functional)  
**Reset Password** : "/reset-password" (not functional)  
### Professor Side
**Dashboard** : "/professor/courses" it is also the default page when logging in  
**Course** : "/professor/course/:id/:tab" where id is the id of the course and tab is the tab selected on the page. Best way to get to this page is to click on an existing course from the dashboard  
**Review** : "/professor/assignment/review"
### Student Side
**Dashboard** : "/student/dashboard"  
**Assignment Page/ Review** : "/student/:courseId/assignment/:id?" where courseId and id are the ids for a course and assignment respectively. The easist way to get to student assignment page is to click explore on an existing course.