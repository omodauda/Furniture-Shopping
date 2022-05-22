import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('*Please enter a valid email address')
    .required('*Email is required'),
  password: yup
    .string()
    .min(5, ({min}) => `*Password must be at least ${min} characters`)
    .required('*Password is required'),
});
