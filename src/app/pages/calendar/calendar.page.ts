import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { SharedService } from 'src/app/shared.service';
import * as moment from 'moment';

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
    this.loadHolidaysData();
  }

  loadHolidaysData() {
    this.holidaysData = this.sharedService.getHolidaysFromLocalStorage();
    if (this.holidaysData && this.holidaysData.length > 0) {
      this.eventsData = [];
      for (let i = 0; i < this.holidaysData.length; i++) {
        const userHolidays = this.holidaysData[i].holidays;
        this.eventsData = this.eventsData.concat(
          userHolidays.map((holidays: any) => {
            const endDate = new Date(holidays.holidaysTo);
            endDate.setDate(endDate.getDate() + 1);
            const status = holidays.status;
            if (status === 'waiting') {
              return {
                title: 'Urlaub beantragt',
                start: holidays.holidaysFrom,
                end: moment(endDate).format('YYYY-MM-DD'),
                display: 'background',
                backgroundColor: '#eef011',
                color: '#3c8f69',
              };
            } else if (status === 'approved') {
              return {
                title: 'Urlaub genehmigt',
                start: holidays.holidaysFrom,
                end: moment(endDate).format('YYYY-MM-DD'),
                display: 'background',
                backgroundColor: '#3c8f69',
                color: '#eef011',
              };
            } else if (status === 'rejected') {
              return {
                title: 'Urlaub storniert',
                start: holidays.holidaysFrom,
                end: moment(endDate).format('YYYY-MM-DD'),
                display: 'background',
                backgroundColor: '#f44336',
                color: '#eef011',
              };
            } else {
              return null;
            }
          })
        );
      }
      this.initializeCalendar();
    }
  }

  initializeCalendar() {
    this.calendarOptions.eventSources = [
      (fetchInfo, successCallback, failureCallback) => {
        successCallback(this.eventsData);
      },
    ];
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
    events: [
      {
        title: '17:00 Weihnachtsfeier',
        start: '2023-12-02T17:00:00',
        allDay: false,
        time: '17:00',
        backgroundColor: '#3c8f69',
      },
    ],
  };
}
