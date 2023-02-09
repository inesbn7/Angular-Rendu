import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/model/emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {

  listEmploi!: Emploi[];
  constructor() { }
  ngOnInit(): void {
    this.listEmploi = [{ reference: 'ABC', titre: 'test', entreprise: 'esprit', etat: true }, { reference: 'DEF', titre: 'test2', entreprise: 'ESB', etat: false }]
  }
  calculerB() {
    let bilan = 0;
    for (const emploi of this.listEmploi) {
      if (!emploi.etat) {
        bilan++;
      }
    }
    alert(`Il y a ${bilan} offres d'emploi non clôturées.`);
  }
  recherche(value: string) {
    let resultats = [];
    for (const emploi of this.listEmploi) {
      if (value == emploi.entreprise) {
        resultats.push(emploi);
        break;
      }
    }
    this.listEmploi = resultats;
    return resultats;
  }

}
