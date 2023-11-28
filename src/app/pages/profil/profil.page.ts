import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  user: User[] = [];
  editInfo: boolean = false;
  editLicensesInfo: boolean = false;
  editInsuranceInfo: boolean = false;
  userName: string = '';
  userLastname: string = '';
  userPhone: string = '';
  userEmail: string = '';
  userAddress: string = '';
  userStadt: string = '';
  userDriverLicense: string = '';
  userAmbulanceLicense: string = '';
  userInsuranceName: string = '';
  userInsuranceNumber: string = '';
  sickCertificate: string = '';
  editBankInfo: boolean = false;
  userBankOwner: string = '';
  userBankNumber: string = '';
  userBankBic: string = '';

  krankenkassen = [
    { name: 'AOK Baden-Württemberg' },
    { name: 'AOK Bayern' },
    { name: 'AOK Bremen/Bremerhaven' },
    { name: 'AOK Hessen' },
    { name: 'AOK Niedersachsen' },
    { name: 'AOK Nordost' },
    { name: 'AOK NORDWEST' },
    { name: 'AOK PLUS' },
    { name: 'AOK Rheinland -Pfalz/Saarland' },
    { name: 'AOK Rheinland/Hamburg' },
    { name: 'AOK Sachsen-Anhalt' },
    { name: 'Audi BKK' },
    { name: 'BAHN-BKK' },
    { name: 'BERGISCHE Krankenkasse' },
    { name: 'Bertelsmann BKK' },
    { name: 'BKK Akzo Nobel Bayern' },
    { name: 'BKK Diakonie' },
    { name: 'BKK DürkoppAdler' },
    { name: 'BKK EUREGIO' },
    { name: 'BKK exklusiv' },
    { name: 'BKK Faber-Castell & Partner' },
    { name: 'BKK firmus' },
    { name: 'BKK Freudenberg' },
    { name: 'BKK GILDEMEISTER SEIDENSTICKER' },
    { name: 'BKK Herkules' },
    { name: 'BKK Linde' },
    { name: 'bkk melitta hmr' },
    { name: 'BKK PFAFF' },
    { name: 'BKK Pfalz' },
    { name: 'BKK ProVita' },
    { name: 'BKK Public' },
    { name: 'BKK SBH' },
    { name: 'BKK Scheufelen' },
    { name: 'BKK Technoform' },
    { name: 'BKK Textilgruppe Hof' },
    { name: 'BKK VBU' },
    { name: 'BKK VDN' },
    { name: 'BKK VerbundPlus' },
    { name: 'BKK WERRA-MEISSNER' },
    { name: 'BKK Wirtschaft & Finanzen' },
    { name: 'BKK ZF & Partner' },
    { name: 'BKK24' },
    { name: 'BOSCH BKK' },
    { name: 'Continentale Betriebskrankenkasse' },
    { name: 'Debeka BKK' },
    { name: 'energie-BKK' },
    { name: 'Heimat Krankenkasse' },
    { name: 'mhplus BKK' },
    { name: 'Mobil Krankenkasse' },
    { name: 'Novitas BKK' },
    { name: 'pronova BKK' },
    { name: 'R+V Betriebskrankenkasse' },
    { name: 'Salus BKK' },
    { name: 'SBK' },
    { name: 'SECURVITA Krankenkasse' },
    { name: 'SKD BKK' },
    { name: 'TUI BKK' },
    { name: 'VIACTIV Krankenkasse' },
    { name: 'vivida bkk' },
    { name: 'WMF BKK' },
    { name: 'BARMER' },
    { name: 'DAK-Gesundheit' },
    { name: 'HEK-Hanseatische Krankenkasse' },
    { name: 'hkk – Handelskrankenkasse' },
    { name: 'KKH Kaufmännische Krankenkasse' },
    { name: 'KNAPPSCHAFT' },
    { name: 'Techniker Krankenkasse (TK)' },
    { name: 'BIG direkt gesund' },
    { name: 'IKK – Die Innovationskasse' },
    { name: 'IKK Brandenburg und Berlin' },
    { name: 'IKK classic' },
    { name: 'IKK gesund plus' },
    { name: 'IKK Südwest' },
  ];

  constructor(private sharedService: SharedService) {
    this.sharedService.updateTitle('Profil');
  }

  ngOnInit() {
    this.getInfoFromUser();
  }

  /**
   * The function getInfoFromUser() is a function that gets the user info from the local storage
   */
  async getInfoFromUser() {
    try {
      const userData = await this.sharedService.getUserLocalStorage();
      if (userData) {
        this.user = Array.isArray(userData) ? userData : [userData];
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  /**
   * The function editInfoUser() is a function that allows the user to edit his info
   */
  editInfoUser() {
    this.editInfo = true;
  }

  /**
   * The function editLicensesUser() is a function that allows the user to edit his licenses
   */
  editLicensesUser() {
    this.editLicensesInfo = true;
  }

  /**
   * The function editLicensesUser() is a function that allows the user to edit his licenses
   */
  editInsuranceUser() {
    this.editInsuranceInfo = true;
  }

  /**
   * The function editBankUser() is a function that allows the user to edit his bank
   */
  editBankUser() {
    this.editBankInfo = true;
  }

  /**
   * The function saveInfo() is a function that saves the new user info in the local storage
   * @param form NgForm
   */
  saveInfo(form: NgForm) {
    if (form.valid) {
      const worker = {
        name: this.userName,
        lastname: this.userLastname,
        phone: this.userPhone,
        email: this.userEmail,
        address: this.userAddress,
        stadt: this.userStadt,
      };
      this.sharedService.updateInfoLocalStorage(worker);
      this.editInfo = false;
      this.getInfoFromUser();
    }
  }

  /**
   * The function saveLicenses() is a function that saves the new user his licenses in the local storage
   * @param form NgForm
   */
  saveLicenses(form: NgForm) {
    if (form.valid) {
      const worker = {
        driverLicense: this.userDriverLicense,
        ambulanceLicense: this.userAmbulanceLicense,
      };
      this.sharedService.updateInfoLocalStorage(worker);
      this.editLicensesInfo = false;
      this.getInfoFromUser();
    }
  }

  /**
   * The function saveLicenses() is a function that saves the new user his licenses in the local storage
   * @param form NgForm
   */
  saveInsurance(form: NgForm) {
    if (form.valid) {
      const worker = {
        insuranceName: this.userInsuranceName,
        insuranceNumber: this.userInsuranceNumber,
      };
      this.sharedService.updateInfoLocalStorage(worker);
      this.editInsuranceInfo = false;
      this.getInfoFromUser();
    }
  }

  /**
   * The function saveBank() is a function that saves the new users bank in the local storage
   * @param form NgForm
   */
  saveBank(form: NgForm) {
    if (form.valid) {
      const worker = {
        bankOwner: this.userBankOwner,
        bankNumber: this.userBankNumber,
        bankBic: this.userBankBic,
      };
      this.sharedService.updateInfoLocalStorage(worker);
      this.editBankInfo = false;
      this.getInfoFromUser();
    }
  }

  /**
   * The function formatDate() is a function that formats the date
   * @param dateString The date to be formatted
   * @returns the formatted date
   */
  formatDate(dateString: string | undefined): string {
    if (!dateString) {
      return '';
    }

    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
}
