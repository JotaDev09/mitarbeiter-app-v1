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
  userName: string = '';
  userLastname: string = '';
  userPhone: string = '';
  userEmail: string = '';
  userAddress: string = '';
  userStadt: string = '';
  userDriverLicense: string = '';
  userAmbulanceLicense: string = '';
  sickCertificate: string = '';

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
        driverLicense: this.userDriverLicense,
        ambulanceLicense: this.userAmbulanceLicense,
        sickCertificate: this.sickCertificate,
      };
      this.sharedService.updateInfoLocalStorage(worker);
      console.log(worker);
      this.editInfo = false;
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
