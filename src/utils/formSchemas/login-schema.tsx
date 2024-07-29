import { number, object, string } from 'yup';

export const loginSchema = object().shape({
  username: number()
    .typeError('National ID MUST be a number')
    .test('len', 'A valid national ID is required', (val: any) => val.toString().length > 5)
    .required('A National ID number is required'),
  password: string().min(6).required('A strong password is required')
});
