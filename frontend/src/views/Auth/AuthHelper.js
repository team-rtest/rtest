export const validate = (name, value) => {
  switch (name) {
    case "password":
      return this.validatePassword(value);
    default:
      return !value;
  }
};

export const validateEmail = (value) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailValid = emailRegex.test(value.toLowerCase());
  if (!emailValid) return "Email is invalid";
};

export const validatePassword = (value) => {
  if (value.length < 8) return "Password must have at least 8 characters";
};
