import * as yup from 'yup';

export const addShippingAddressValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('*Full name is required'),
  address: yup
    .string()
    .min(5, ({min}) => `*Address must be at least ${min} characters`)
    .required('*Address is required'),
	postalCode: yup
		.string()
    .min(5, ({min}) => `*Postal must be at least ${min} characters`)
    .required('*Postal is required'),
});
