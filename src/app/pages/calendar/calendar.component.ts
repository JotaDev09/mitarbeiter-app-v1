import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { SharedService } from 'src/app/shared.service';
import { HttpClient } from '@angular/common/http';
import { format } from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit {
  holidaysData: any[] = [];
  eventsData: any[] = [];

  constructor(private sharedService: SharedService, private http: HttpClient) {
    this.sharedService.updateTitle('Kalender');
  }

  ngOnInit() {
    this.loadHolidaysData();
    this.loadHolidaysGermany();
  }

  /**
   * The function loadHolidaysGermany() is a function that gets the holidays in Germany from the API
   */
  async loadHolidaysGermany() {
    const url = 'https://get.api-feiertage.de?states=be';

    try {
      const data: any = await this.http.get(url).toPromise();

      if (data && data.feiertage) {
        this.eventsData = [];

        for (const holiday of data.feiertage) {
          this.eventsData.push({
            start: holiday.date,
            title: holiday.fname,
            backgroundColor: '#eef011',
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * The function loadHolidaysData() is a function that gets the holidays from the local storage
   */
  loadHolidaysData() {
    this.holidaysData = this.sharedService.getHolidaysFromLocalStorage();
    if (this.holidaysData && this.holidaysData.length > 0) {
      this.eventsData = [];
      for (let i = 0; i < this.holidaysData.length; i++) {
        const userHolidays = this.holidaysData[i].holidays;
        this.eventsData = this.eventsData.concat(
          userHolidays
            .map((holidays: any) => {
              const endDate = new Date(holidays.holidaysTo);
              endDate.setDate(endDate.getDate() + 1);
              const status = holidays.status;
              if (status === 'requested') {
                return this.requested(holidays, endDate);
              } else if (status === 'approved') {
                return this.approved(holidays, endDate);
              } else if (status === 'rejected') {
                return this.rejected(holidays, endDate);
              } else {
                return null;
              }
            })
            .filter((event: any) => event !== null)
        );
      }
      this.initializeCalendar();
    }
  }

  /**
   * The function requested() is a function that returns the requested holidays
   * @param holidays the data of the holidays
   * @param endDate the end date of the holidays
   * @returns the requested holidays
   */
  requested(holidays: any, endDate: Date) {
    return {
      title: 'Urlaub beantragt',
      start: format(holidays.holidaysFrom, 'yyyy-MM-dd'),
      end: format(endDate, 'yyyy-MM-dd'),
      display: 'background',
      backgroundColor: '#eef011',
      color: '#3c8f69',
    };
  }

  /**
   * The function approved() is a function that returns the approved holidays
   * @param holidays the data of the holidays
   * @param endDate the end date of the holidays
   * @returns the approved holidays
   */
  approved(holidays: any, endDate: Date) {
    return {
      title: 'Urlaub genehmigt',
      start: holidays.holidaysFrom,
      end: format(endDate, 'yyyy-MM-dd'),
      display: 'background',
      backgroundColor: '#3c8f69',
      color: '#eef011',
    };
  }

  /**
   * The function rejected() is a function that returns the rejected holidays
   * @param holidays the data of the holidays
   * @param endDate the end date of the holidays
   * @returns the rejected holidays
   */
  rejected(holidays: any, endDate: Date) {
    return {
      title: 'Urlaub storniert',
      start: holidays.holidaysFrom,
      end: format(endDate, 'yyyy-MM-dd'),
      display: 'background',
      backgroundColor: '#f44336',
      color: '#eef011',
    };
  }
  /**
   * The function initializeCalendar() is a function that initialize the calendar with the events
   */
  initializeCalendar() {
    this.calendarOptions.eventSources = [
      (fetchInfo, successCallback) => {
        successCallback(this.eventsData);
      },
    ];
  }

  /**
   * The fullcalendar options
   */
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
