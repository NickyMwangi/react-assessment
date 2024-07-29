export interface IRegisterModel {
  name: string;
  email: string;
  nationalID: number;
  staffNo?: string | null;
  jobGroup: string;
  jobTitle?: string | null;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  userType?: string | null;
}
