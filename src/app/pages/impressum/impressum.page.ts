import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.page.html',
  styleUrls: ['./impressum.page.scss'],
})
export class ImpressumPage implements OnInit {
  impressumContain = [
    {
      impressumContTitle: 'Geschäftsführender Gesellschafter',
      impressumContText: 'Olaf Gorris',
    },
    {
      impressumContTitle: 'Geschäftsführung',
      impressumContText: 'Olaf Gorris',
      impressumContText2: 'Rina Richter',
    },
    {
      impressumContTitle: 'Handelsregister',
      impressumContText: 'HRB 53708',
    },
    {
      impressumContTitle: 'Gerichtsstand',
      impressumContText: 'Amtsgericht Charlottenburg',
    },
    {
      impressumContTitle: 'Aufsichtsbehörde',
      impressumContText:
        'Landesamt für Bürger- und Ordnungsangelegenheiten Berlin',
      impressumContText2: 'Puttkamer Str. 16-18 | 10958 Berlin',
    },
    {
      impressumContTitle: 'Konzeption und Design',
      impressumContText: 'Thomas Nolte, Thomas Liening & Juan de Santos',
      impressumContText2: 'Krankentransport Gorris GmbH',
    },
    {
      impressumContTitle: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
      impressumContText: 'Krankentransport Gorris GmbH',
      impressumContText2: 'Strasse 9 | Nr. 8-10 | 12309 Berlin',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
