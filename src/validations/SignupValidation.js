import * as yup from 'yup';

export const signupValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('*Full name is required'),
  email: yup
    .string()
    .email('*Please enter a valid email address')
    .required('*Email is required'),
  password: yup
    .string()
    .min(5, ({min}) => `*Password must be at least ${min} characters`)
    .required('*Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password do not match')
    .required('Confirm password is required'),
});
