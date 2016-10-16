import { Component } from '@angular/core';
import { Article } from './article/article.model.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles:Article[];


  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 10),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular 1', 'http://angular.org')
    ];
  }


  addArticle(title:HTMLInputElement, link:HTMLInputElement):boolean {
    console.log("Adding link with title \"%s\" and url: %s", title.value, link.value);

    this.articles.push(new Article(title.value, link.value));

    title.value ='';
    link.value = '';

    return false;
  }
}
