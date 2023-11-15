import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InformationPage implements OnInit {
  panelOpenState = false;
  ktGorris = 'Krankentransport Gorris GmbH';
  ATB = 'Ambulanz Team Berlin';
  ADG = 'ADG GmbH';
  RRichter = 'Rina Richter';
  OGorris = 'Olaf Gorris';
  MRack = 'Matthias Rack';
  BCangiano = 'Bianca Cangiano';
  UTrispel = 'Ulrike Trispel';

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

  ngOnInit() {}
}
