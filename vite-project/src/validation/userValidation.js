import * as yup from "yup";

const USER_REGISTRATION_SCHEMA = yup.object({
  firstName: yup.string().required().min(2),
  lastName: yup.string().required().min(2),
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(
      /^[a-zA-Z0-9]{8,32}$/,
      "Password must contain letters on numbers and be 8 - 32 symbols long"
    ),
  passwordRepeat: "",
  gender: yup.string().required(),
});

export { USER_REGISTRATION_SCHEMA };
