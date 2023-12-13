import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss',
})
export class DocumentsComponent implements OnInit {
  user: any;
  constructor(private sharedService: SharedService) {
    this.sharedService.updateTitle('Dokumente');
  }

  ngOnInit() {
    this.user = this.sharedService.getUserLocalStorage();
  }

  /**
   * The function onFilesSelected() is a function that allows the user to select a file of car license
   * @param event Event
   */
  onFilesSelectedLicense(event: any) {
    this.handleFileSelection(event, 'carLicenses');
    console.log('false');
  }

  /**
   * The function onFilesSelecteds() is a function that allows the user to select a file of sick certificate
   * @param event Event
   */
  onFilesSelectedCertificate(event: any) {
    this.handleFileSelection(event, 'sickCertificate');
    console.log('true');
  }

  /**
   * The function onFilesSelectedss() is a function that allows the user to select a file of driver license or sick certificate
   * @param event Event
   */
  private handleFileSelection(event: any, property: string) {
    const files = event.target.files;

    if (files && files.length > 0) {
      const validFiles = Array.from(files).filter(
        (file: any) =>
          file.type === 'application/pdf' || file.type === 'image/jpeg'
      );

      if (validFiles.length > 0) {
        const imagePaths = validFiles.map((file: any) => ({
          name: file.name,
        }));

        const updateObj = {
          [property]: this.user[property]
            ? [...this.user[property], ...imagePaths]
            : imagePaths,
        };
        console.log(updateObj);

        this.sharedService.updateInfoLocalStorage(updateObj);
      }
    }
  }

  /**
   * The function deleteFile() is a function that allows the user to delete a file
   * @param fileName string
   * @param property string
   */
  getCompleteImagePath(fileName: string): string {
    return `/assets/img/${fileName}`;
  }
}
