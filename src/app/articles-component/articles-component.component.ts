import { Component, OnInit } from '@angular/core';
import { Article } from '../Articles/ArticlesComponent';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent implements OnInit {

  listArticles!: Article[];
  constructor() { }

  ngOnInit(): void {
    this.listArticles = [{ titre: 'Le championnat du monde', contenu: 'Le champion du monde de cette année est', auteur: 'Med Taher', date: '12/12/2005', categorie: 'Sport' }
      , { titre: 'Les Parents', contenu: 'Les nouveaux parents', auteur: 'Ahmed Said', date: '11/11/2018', categorie: 'Education' }
      , { titre: 'Comment écrire votre CV', contenu: 'Pour réussir à décraucher un emploi', auteur: 'Marie Elsa', date: '02/04/2017', categorie: 'Travail' }]
  }

}




