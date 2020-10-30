function createCourse(inputs, create) {
  return new Promise((resolve, reject) => {
    const handleUpload = (file) => {
      // minio s3 syllabus upload here
    };

    const handleCreate = (course) => {
      create({ variables: { course } });
    };

    const course = {
      name: inputs.name,
      courseNumber: inputs.courseNumber,
      semester: inputs.semester,
    };

    const errors = {
      name: !inputs.name,
      courseNumber: !inputs.courseNumber,
      semester: !inputs.semester,
    };

    const valid = course.name && course.courseNumber && course.semester;

    if (valid) {
      handleUpload();
      handleCreate(course);
      resolve();
    } else {
      reject(errors);
    }
  });
}

export default createCourse;
