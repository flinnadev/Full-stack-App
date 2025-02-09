import { Formik, Form, Field, ErrorMessage } from "formik";
import { USER_REGISTRATION_SCHEMA } from "../../validation/userValidation";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordRepeat: "",
  gender: "",
  // imgSrc: '',
};

const RegistrationForm = () => {
  const handleSubmit = (values, formikBag) => {
    const { gender, ...restOfUserData } = values;

    const newUserData = {
      ...restOfUserData,
      isMale: gender === "male",
    };

    console.log(newUserData);

    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_REGISTRATION_SCHEMA}
    >
      <Form>
        <div>
          <Field
            name="firstName"
            type="text"
            id="firstName"
            placeholder="First name"
          />
          <ErrorMessage name="firstName" component="p" />
        </div>
        <div>
          <Field
            name="lastName"
            type="text"
            id="lastName"
            placeholder="Last name"
          />
          <ErrorMessage name="lastName" component="p" />
        </div>
        <div>
          <Field name="email" type="email" id="email" placeholder="Email" />
          <ErrorMessage name="email" component="p" />
        </div>
        <div>
          <Field
            name="password"
            type="password"
            id="password"
            placeholder="Password"
          />
          <ErrorMessage name="password" component="p" />
        </div>
        <div>
          <Field
            name="passwordRepeat"
            type="password"
            id="passwordRepeat"
            placeholder="Repeat password"
          />
          <ErrorMessage name="passwordRepeat" component="p" />
        </div>

        <fieldset>
          <legend>Gender</legend>
          <div>
            <Field type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>
          </div>

          <div>
            <Field type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
          </div>
          <ErrorMessage name="gender" component="p" />
        </fieldset>

        <div>
          <button type="submit">Register</button>
          <button type="reset">Reset fields</button>
        </div>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
