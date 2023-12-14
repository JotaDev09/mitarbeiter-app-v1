import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-workshop-request',
  templateUrl: './workshop-request.component.html',
  styleUrl: './workshop-request.component.scss',
})
export class WorkshopRequestComponent {
  id = this.sharedService.getId();
  driver: string = '';
  assistant: string = '';
  plate: string = '';
  reparatur: string = '';
  dateRequest: string = '';
  minDate = this.sharedService.minDate;
  kilometers: string = '';
  floatContainer: boolean = false;

  constructor(private sharedService: SharedService) {
    this.sharedService.updateTitle('Wartungs- und Reparaturauftrag');
  }

  /**
   * The function send the workshop request
   * @param workshopForm The form of the workshop request
   */
  sendWorkshopRequest(workshopForm: any) {
    if (workshopForm.valid) {
      const reaparaturData = {
        id: this.id,
        driver: this.driver,
        assistant: this.assistant,
        reparatur: this.reparatur,
        plate: this.plate,
        kilometers: this.kilometers,
        dateRequest: this.sharedService.minDate,
      };

      this.sharedService.saveReparaturLocalStorage(reaparaturData);
      setTimeout(() => {
        this.floatContainer = true;
      }, 300);
      setTimeout(() => {
        this.floatContainer = false;
        this.driver = '';
        this.assistant = '';
        this.reparatur = '';
        this.plate = '';
        this.kilometers = '';
      }, 1300);
    }
  }

  /**
   * The function set settings in notes
   */
  setNotes(reparatur: string) {
    this.reparatur = this.sharedService.capitalizeFirstLetter(reparatur);
  }
}
