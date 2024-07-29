import { number, object, ref, string } from 'yup';

export const registerSchema = object({
  name: string().min(2).required('Name is required as it appears in your national ID'),
  email: string().email('Enter a valid email address').required('An email address is required'),
  nationalID: number()
    .test('len', 'A valid national ID is required', (val: any) => val.toString().length > 5)
    .required('A National ID number is required'),
  staffNo: string().nullable(),
  jobGroup: string().required(),
  jobTitle: string().nullable(),
  phoneNumber: string().min(10, 'Enter a valid phone number').required('A phone number is required'),
  password: string().min(6).required('A strong password is required'),
  confirmPassword: string()
    .oneOf([ref('password'), ''], 'Passwords must match')
    .required('confirm password is required'),
  userType: string().nullable()
});
