import { Holidays } from './holidays';

export interface User {
  name: string;
  lastname: string;
  email: string;
  password: string;
  holidays: Holidays[];
  dienst: [];
  id: string;
  stillHolidays: number;
  phone: string;
  address: string;
  stadt: string;
  driverLicense: string;
  ambulanceLicense: string;
  carLicenses: [];
  payrolls: [];
  sickCertificate: [];
  insuranceName: string;
  insuranceNumber: string;
  bankOwner: string;
  bankNumber: string;
  bankBic: string;
}
