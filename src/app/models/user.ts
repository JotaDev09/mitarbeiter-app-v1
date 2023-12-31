import { Holidays } from './holidays';

export interface User {
  privateDaten: {
    name: string;
    lastname: string;
    email: string;
    phone: string;
    address: string;
    stadt: string;
  };
  password: string;
  holidays: Holidays[];
  dienst: [];
  $id: string;
  stillHolidays: number;
  datesLicenses: {
    driverLicense?: string;
    ambulanceLicense?: string;
  };
  carLicenses: [];
  payrolls: [];
  sickCertificate: [];
  insurance: {
    insuranceName: string;
    insuranceNumber: string;
  };
  bank: {
    bankOwner: string;
    bankNumber: string;
    bankBic: string;
  };
  reparatur: [];
}
