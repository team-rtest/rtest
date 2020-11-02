import { useState } from "react";

function initializer(data, keys) {
  const object = {};
  for (const key of keys) {
    object[key] = data[key] || "";
  }
  return object;
}

function useForm({ data = {}, names, check, onSubmit }) {
  const initialInputs = initializer(data, names);
  const initialErrors = initializer({}, check);

  const [inputs, setInputs] = useState(initialInputs);
  const [errors, setErrors] = useState(initialErrors);
  const [loading, setLoading] = useState(false);

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
    if (check.includes(name)) {
      setErrors({ ...errors, [name]: !value });
    }
  };

  const handleSubmit = (variables) =>
    new Promise((resolve, reject) => {
      const errors = {};
      for (const name of check) {
        errors[name] = !inputs[name];
      }
      const invalid = check.some((name) => errors[name]);

      console.log(errors);

      if (invalid) {
        setErrors(errors);
        reject(errors);
        return;
      }

      onSubmit({ variables })
        .then(resolve)
        .catch(reject)
        .finally(() => setLoading(false));
    });

  return { inputs, errors, loading, handleChange, handleSubmit };
}

export default useForm;
