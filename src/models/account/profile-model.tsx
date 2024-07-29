export interface ProfileModel {
  id: string;
  name: string;
  email: string;
  nationalID: number;
  staffNo?: string | null;
  jobGroup?: string | null;
  jobTitle?: string | null;
  dob: string;
  phoneNumber: string;
}
