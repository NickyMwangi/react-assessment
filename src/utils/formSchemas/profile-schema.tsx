import { number, object, string } from 'yup';

export const profileSchema = object({
  id: string().min(2).required(),
  name: string().min(2).required('Name is required as it appears in your national ID'),
  email: string().email('Enter a valid email address').required('An email address is required'),
  nationalID: number()
    .test('len', 'A valid national ID is required', (val: any) => val.toString().length > 5)
    .required('A National ID number is required'),
  staffNo: string().nullable(),
  jobGroup: string().nullable(),
  jobTitle: string().nullable(),
  phoneNumber: string().min(10, 'Enter a valid phone number').required('A phone number is required'),
  dob: string().required()
});
