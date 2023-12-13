import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss',
})
export class PrivacyComponent implements OnInit {
  address = 'Strasse 9 | Nr. 8-10 | 12309 Berlin';
  telefon = 'Telefon +49 (0)30 705 50 60';
  fax = 'Telefax +49 (0)30 705 50 651';

  privacyContain = [
    {
      privacyContTitle: 'Begriffsbestimmungen:',
      privacyContText:
        'Diese Datenschutzerklärung beruht auf den Begrifflichkeiten der europäischen Datenschutz-Grundverordnung (DSGVO) und soll sowohl für die Öffentlichkeit als auch für unsere Kunden und Geschäftspartner einfach lesbar und verständlich sein. Um dies zu gewährleisten, möchten wir vorab die verwendeten Begrifflichkeiten erläutern.',
    },
    {
      privacyContTitle: 'Personenbezogene Daten',
      privacyContText:
        'Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen. Als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem oder mehreren besonderen Merkmalen, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind, identifiziert werden kann.',
    },
    {
      privacyContTitle: 'Betroffene Person',
      privacyContText:
        'Betroffene Person ist jede identifizierte oder identifizierbare natürliche Person, deren personenbezogene Daten von dem für die Verarbeitung Verantwortlichen verarbeitet werden.',
    },
    {
      privacyContTitle: 'Verarbeitung',
      privacyContText:
        'Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.',
    },
    {
      privacyContTitle: 'Einschränkung der Verarbeitung',
      privacyContText:
        'Einschränkung der Verarbeitung ist die Markierung gespeicherter personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung einzuschränken.',
    },
    {
      privacyContTitle: 'Profiling',
      privacyContText:
        'Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.',
    },
    {
      privacyContTitle: 'Verarbeitung:',
      privacyContText:
        'Profiling ist jede Art der automatisierten Verarbeitung personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten, insbesondere, um Aspekte bezüglich Arbeitsleistung, wirtschaftlicher Lage, Gesundheit, persönlicher Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen.',
    },
    {
      privacyContTitle: 'Pseudonymisierung',
      privacyContText:
        'Pseudonymisierung ist die Verarbeitung personenbezogener Daten in einer Weise, auf welche die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet werden können, sofern diese zusätzlichen Informationen gesondert aufbewahrt werden und technischen und organisatorischen Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen Person zugewiesen werden.',
    },
    {
      privacyContTitle:
        'Verantwortlicher oder für die Verarbeitung Verantwortlicher',
      privacyContText:
        'Verantwortlicher oder für die Verarbeitung Verantwortlicher ist die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet. Sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht oder das Recht der Mitgliedstaaten vorgegeben, so kann der Verantwortliche beziehungsweise können die bestimmten Kriterien seiner Benennung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten vorgesehen werden.',
    },
    {
      privacyContTitle: 'Auftragsverarbeiter',
      privacyContText:
        'Auftragsverarbeiter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.',
    },
    {
      privacyContTitle: 'Empfänger',
      privacyContText:
        'Empfänger ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, der personenbezogene Daten offen gelegt werden, unabhängig davon, ob es sich bei ihr um einen Dritten handelt oder nicht. Behörden, die im Rahmen eines bestimmten Untersuchungsauftrags nach dem Unionsrecht oder dem Recht der Mitgliedstaaten möglicherweise personenbezogene Daten erhalten, gelten jedoch nicht als Empfänger.',
    },
    {
      privacyContTitle: 'Dritter',
      privacyContText:
        'Dritter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle außer der betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter der unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die personenbezogenen Daten zu verarbeiten.',
    },
    {
      privacyContTitle: 'Einwilligung',
      privacyContText:
        'Einwilligung ist jede von der betroffenen Person freiwillig für den bestimmten Fall in informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist.',
    },
  ];

  privacyContact = [
    {
      privacyContactTitle: 'NAME UND KONTAKTDATEN DES VERANTWORTLICHEN',
      privacyContactText:
        'Verantwortlicher für die Verarbeitung personenbezogener Daten gemäß Art. 4 Nr. 7 DSGVO ist:',
    },
    {
      privacyContactTitle: 'DATENSCHUTZBEAUFTRAGTER',
      privacyContactText:
        'Datenschutzbeauftragter Krankentransport Gorris GmbH',
    },
  ];

  privacyContactInfo = [
    {
      name: 'Olaf Gorris',
      address: this.address,
      telefon: this.telefon,
      fax: this.fax,
      mail: 'E-Mail',
    },
  ];

  privacyDaten = [
    {
      privacyDatenTitle:
        'VERARBEITUNG PERSONENBEZOGENER DATEN SOWIE ART UND ZWECK VON DEREN VERWENDUNG',
      privacyDatenText:
        'Wir verarbeiten personenbezogene Daten ausschließlich im rechtmäßigen Rahmen der einschlägigen Rechtsnormen und ggf. Ihrer Einwilligung. Personenbezogene Daten sind all jene Informationen, die sich auf eine natürliche Person beziehen oder zumindest beziehbar sind und so Rückschlüsse auf die Person erlauben.',
      privacyDatenSubtext:
        'Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.',
    },
    {
      privacyDatenTitle: 'BESUCH DER APP',
      privacyDatenText:
        'Beim Aufrufen unserer APP werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer App gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert.',
      privacyDatenSubtext:
        'Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:',
      info1: 'IP-Adresse des anfragenden Rechners',
      info2: 'Datum und Uhrzeit des Zugriffs',
      info3: 'Name und URL der abgerufenen Datei',
      info4: 'Website, von der aus der Zugriff erfolgt (Referrer-URL)',
      info5:
        'Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers',
      info6: 'Gewährleistung eines reibungslosen Verbindungsaufbaus der App',
      info7: 'Gewährleistung einer komfortablen Nutzung unserer App',
      info8:
        'Auswertung der Systemsicherheit und -stabilität sowie zu weiteren administrativen Zwecken',
      vearbeitung:
        'die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:',
      rechtsgrundlage:
        'Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus oben aufgelisteten Zwecken zur Datenerhebung. In keinem Fall verwenden wir die erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre Person zu ziehen. Nähere Erläuterungen dazu erhalten Sie weiter unten in dieser Datenschutzerklärung.',
    },
    {
      privacyDatenTitle: 'WEITERGABE VON DATEN',
      privacyDatenText:
        'Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt. Eine Weitergabe an Dritte außerhalb der EU findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:',
      info1:
        'Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche Einwilligung dazu erteilt haben,',
      info2:
        'die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben,',
      info3:
        'die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben.',
    },
  ];

  containRechte = [
    {
      rechteTitle: 'BETROFFENEN RECHTE',
      rechteText:
        'Da wir Ihre personenbezogenen Daten verarbeiten, haben Sie die nachstehenden Rechte:',
    },
  ];

  RechteContain = [
    {
      rechteContTitle: 'Auskunftsrecht',
      rechteContText:
        'Sie können gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen. Insbesondere können Sie Auskunft über die Verarbeitungszwecke, die Kategorie der personenbezogenen Daten, die Kategorien von Empfängern, gegenüber denen Ihre Daten offen gelegt wurden oder werden, die geplante Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft ihrer Daten, sofern diese nicht bei uns erhoben wurden, sowie über das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftigen Informationen zu deren Einzelheiten verlangen;',
    },
    {
      rechteContTitle: 'Berichtigung',
      rechteContText:
        'Sie können gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.',
    },
    {
      rechteContTitle: 'Löschung',
      rechteContText:
        'Sie können gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.',
    },
    {
      rechteContTitle: 'Einschränkung',
      rechteContText:
        'Sie können gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen, soweit die Richtigkeit der Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist, Sie aber deren Löschung ablehnen und wir die Daten nicht mehr benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung eingelegt haben.',
    },
    {
      rechteContTitle: 'Datenübertragbarkeit',
      rechteContText:
        'Sie können gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format erhalten oder die Übermittlung an einen anderen Verantwortlichen verlangen.',
    },
    {
      rechteContTitle: 'Widerrufsrecht',
      rechteContText:
        'Sie können gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns widerrufen. Dies hat zur Folge, dass wir die Datenverarbeitung, die auf dieser Einwilligung beruhte, für die Zukunft nicht mehr fortführen dürfen.',
    },
    {
      rechteContTitle: 'Beschwerderecht',
      rechteContText:
        'Sie können sich gemäß Art. 77 DSGVO bei einer Aufsichtsbehörde beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen datenschutzrechtliche Bestimmungen verstößt. In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres Unternehmenssitzes wenden.',
    },
  ];

  datenContact = [
    {
      datenContactTitle: 'AUFSICHTSBEHÖRDE IM LAND BERLIN',
      datenContactText:
        'Berliner Beauftragte für Datenschutz und Informationsfreiheit',
    },
  ];

  datenContactInfo = [
    {
      address: 'Friedrichstraße 219, 10969 Berlin',
      telefon: 'Telefon +49 (0)30 138890',
      homepage: 'Homepage:',
      web: 'https://www.datenschutz-berlin.de/',
      mail: 'E-Mail: mailbox@datenschutz-berlin.de',
    },
  ];

  widerspruchrecht = [
    {
      title: 'WIDERSPRUCHSRECHT',
      text: 'Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben oder sich der Widerspruch gegen Direktwerbung richtet. Im letzteren Fall haben Sie ein generelles Widerspruchsrecht, das ohne Angabe einer besonderen Situation von uns umgesetzt wird. Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine Mitteilung an uns. Bitte schreiben Sie uns dann eine E-Mail.',
    },
    {
      title: 'DATENSCHUTZ BEI BEWERBUNGEN UND IM BEWERBUNGSVERFAHREN',
      text: 'Wir verarbeiten die personenbezogenen Daten von Bewerbern zum Zwecke der Abwicklung des Bewerbungsverfahrens. Die Verarbeitung kann auch auf elektronischem Wege erfolgen. Dies ist insbesondere dann der Fall, wenn ein Bewerber entsprechende Bewerbungsunterlagen auf dem elektronischen Wege, beispielsweise per E-Mail oder über ein auf der Internetseite befindliches Webformular, an uns übermittelt. Schließen wir einen Anstellungsvertrag mit einem Bewerber, werden die übermittelten Daten zum Zwecke der Abwicklung des Beschäftigungsverhältnisses unter Beachtung der gesetzlichen Vorschriften gespeichert. Wird von dem für die Verarbeitung Verantwortlichen kein Anstellungsvertrag mit dem Bewerber geschlossen, so werden die Bewerbungsunterlagen sechs Monate nach Bekanntgabe der Absageentscheidung automatisch gelöscht, sofern einer Löschung keine sonstigen berechtigten Interessen des für die Verarbeitung Verantwortlichen entgegenstehen. Sonstiges berechtigtes Interesse in diesem Sinne ist beispielsweise eine Beweispflicht in einem Verfahren nach dem Allgemeinen Gleichbehandlungsgesetz (AGG).',
    },
    {
      title: 'DAUER, FÜR DIE DIE PERSONENBEZOGENEN DATEN GESPEICHERT WERDEN',
      text: 'Das Kriterium für die Dauer der Speicherung von personenbezogenen Daten ist deren Zweckentfall und die jeweilige gesetzliche Aufbewahrungsfrist. Nach Ablauf der Frist werden die entsprechenden Daten gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind. Unter Umständen werden die personenbezogenen Daten auch erst nach Ablauf der Verjährungsfrist gelöscht. Die regelmäßige Verjährungsfrist beträgt drei Jahre. In Einzelfällen auch bis zu 30 Jahren',
    },
    {
      title: 'BESTEHEN EINER AUTOMATISIERTEN ENTSCHEIDUNGSFINDUNG',
      text: 'Als verantwortungsbewusstes Unternehmen verzichten wir auf eine automatische Entscheidungsfindung oder ein Profiling.',
    },
    {
      title: 'DATENSICHERHEIT',
      text: 'Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) zur Verschlüsselung. Ob eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der geschlossenen Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der unteren Statusleiste Ihres Browsers. Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.',
    },
    {
      title: 'EU-STREITSCHLICHTUNG',
      text: 'DIE EU stellt unter dem Link https://ec.europa.eu/info/index_de eine Online Streitschlichtungsstelle für Verbraucher zur Verfügung. Unsere E-Mail-Adresse finden Sie im Impressum. Die Nutzung der Online-Schlichtungsstelle stellt keine zwingende Voraussetzung für das Anrufen zuständiger ordentlicher Gerichte dar.',
    },
    {
      title: 'INFORMATIONSPFLICHT nach §36 Abs.1 VSBG',
      text: 'Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und grundsätzlich nicht bereit.',
    },
    {
      title: 'ÄNDERUNG DIESER DATENSCHUTZERKLÄRUNG',
      text: 'Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf unser er Website von Ihnen abgerufen und ausgedruckt werden.',
    },
    {
      title: 'Stand September 2020',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
