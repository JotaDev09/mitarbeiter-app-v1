import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarPage implements OnInit {
  holidaysData: any[] = [];
  eventsData: any[] = [];

  constructor(private sharedService: SharedService) {
    this.sharedService.updateTitle('Kalender');
  }

  ngOnInit() {
    this.holidaysData = this.sharedService.getHolidaysFromLocalStorage();

    this.eventsData = this.holidaysData[0].holidays.map((holidays: any) => {
      return {
        title: 'Urlaub',
        start: holidays.holidaysFrom,
        end: holidays.holidaysTo,
        display: 'background',
      };
    });
  }

  calendarOptions: CalendarOptions = {
    locale: 'de',
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    headerToolbar: {
      left: 'prev next',
      center: 'title',
      right: 'today',
    },
    buttonText: {
      today: 'Heute',
      month: 'Monat',
      week: 'Woche',
    },
    firstDay: 1,
    dayHeaderFormat: {
      weekday: 'long',
    },

    eventSources: [
      (fetchInfo, successCallback, failureCallback) => {
        const events = [...this.eventsData];
        successCallback(events);
      },
    ],
  };
}
