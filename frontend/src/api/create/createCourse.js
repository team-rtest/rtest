export default (inputs) =>
  new Promise(async (resolve, reject) => {
    const handleUpload = async (file) => {
      // upload file to minio using s3
    };

    const names = ["name", "code", "semester"];
    const check = names;
    const course = {};
    const errors = {};
    for (const name of names) course[name] = inputs[name];
    for (const name of check) errors[name] = !inputs[name];

    const valid = !names.some((name) => errors[name]);

    if (valid) {
      resolve(course);
    } else {
      reject(errors);
    }
  });
