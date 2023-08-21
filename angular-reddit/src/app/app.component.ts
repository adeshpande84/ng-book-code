import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-reddit';
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('https://angular.io','Angular 2',10),
      new Article('https://fullstack.io','Fullstack',20),
      new Article('https://test.io','Test 2',5),
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b:Article) => b.votes - a.votes);
  }

}
