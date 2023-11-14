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
}
