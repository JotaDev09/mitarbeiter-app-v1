import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class InformationComponent implements OnInit {
  panelOpenState = false;
  ktGorris = 'Krankentransport Gorris GmbH';
  ATB = 'Ambulanz Team Berlin';
  ADG = 'ADG GmbH';
  RRichter = 'Rina Richter';
  OGorris = 'Olaf Gorris';
  MRack = 'Matthias Rack';
  BCangiano = 'Bianca Cangiano';
  UTrispel = 'Ulrike Trispel';
  activeContainer: 'left' | 'right' = 'left';
  panelDriverLicenseOpen = false;
  panelAmbulanceLicenseOpen = false;
  panelNewAmbulanceLicenseOpen: boolean = false;
  panelLeftOpen: boolean = true;
  panelRightOpen: boolean = false;

  information = [
    {
      informationTitle: 'Weihnachtsfeier',
      informationSubTitle: 'Einladung zur Weihnachtsfeier',
      informationDescription: `Liebe Kolleginnen und Kollegen, der Firmen
        <span class="style-gorris">${this.ktGorris}</span>,
        <span class="style-atb">${this.ATB}</span> &
        <span class="style-adg">${this.ADG}</span>, gerne möchten wir Euch hiermit herzlich zu unserer gemeinsamem Weihnachtsfeier einladen.  Wir würden uns sehr freuen, Euch`,
      informationDate: 'am 21. Dezember 2023,',
      informationTime: 'um 17.00 Uhr',
      informationWhere:
        'in der Brauerei BrewDog Im Marienpark 23, 12107 Berlin',
      informationSubText: 'zu begrüßen.',
      informationFinish:
        'Zusätzlich haben wir für Euch drei kleine Bowling-Bahnen und zwei Shuffleboards reserviert.',
      informationFoot: `Wir freuen uns auf Euch!
        <span class="style-gorris">${this.RRichter}</span> &
        <span class="style-gorris">${this.OGorris}</span>,
        <span class="style-atb">${this.MRack}</span>,
        <span class="style-adg">${this.BCangiano}</span> &
        <span class="style-adg">${this.UTrispel}</span>.`,
      foto0: '/assets/img/bowling.jpeg',
      foto1: '/assets/img/brewdog.jpeg',
      foto2: '/assets/img/shuffleBoard.jpeg',
      foto3: '/assets/img/tischen.jpeg',
    },
  ];

  constructor(private sharedService: SharedService) {
    this.sharedService.updateTitle('Information');
  }

  get leftContainerFlex() {
    return this.activeContainer === 'left' ? '80%' : '20%';
  }

  get rightContainerFlex() {
    return this.activeContainer === 'right' ? '80%' : '20%';
  }

  ngOnInit() {}

  /**
   * Change the active container
   * @param container the active container
   */
  onMouseOver(container: 'left' | 'right') {
    this.activeContainer = container;
    if (this.activeContainer === 'left') {
      this.panelLeftOpen = true;
      this.panelRightOpen = false;
    } else {
      this.panelLeftOpen = false;
      this.panelRightOpen = true;
    }
  }

  /**
   * The instructions for use
   * @returns instructions for use
   */
  instructionsForUse() {
    return `
      <div class="instructionsImg">
        <span>- Click auf "Berlinweite Terminbuchung"</span>
        <img src="/assets/img/termin.png" alt="" class="">
      </div>
      <div class="instructionsImg">
        <span>- Datum in blau wählen</span>
        <img src="/assets/img/datum.png" alt="">
      </div>
      <div class="instructionsImg">
        <span>- Standort und Uhrzeit wählen</span>
        <img src="/assets/img/verfugbarkeit.png" alt="">
      </div>
      <div class="instructionsImg">
        <span>- Persönliche Daten hinzufügen</span>
        <img src="/assets/img/daten.png" alt="">
      </div>`;
  }

  /**
   * Scroll to top of the page
   */
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
