import * as yup from 'yup';

export const addPaymentMethodValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('*Full name is required'),
  cardNumber: yup
		.string()
    .min(12, ({min}) => `*Card number must be at least ${min} characters`)
    .required('*Card number is required'),
	cvv: yup
		.string()
    .min(3, ({min}) => `*CVV must be at least ${min} characters`)
    .required('*CVV is required'),
	expDate: yup
		.string()
    .min(4, ({min}) => `*Expiration date must be at least ${min} characters`)
    .required('*Expiration date is required'),
});
