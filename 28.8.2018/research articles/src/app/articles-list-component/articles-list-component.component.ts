import { Component } from '@angular/core';
import { ArticleShowService } from "../shared/services/articleShow.service";
@Component({
  selector: 'app-articles-list-component',
  templateUrl: './articles-list-component.component.html',
  styleUrls: ['./articles-list-component.component.css']
})
export class ArticlesListComponentComponent  {

  constructor(private myService:ArticleShowService) { }

  ngOnInit() {
  }
  listArticle=this.myService.articleArray;
  
  showArticleEvent(articleType){   
    for(let i:number=0;i<this.listArticle.length;i++){
      if(this.listArticle[i].article_type==articleType){
        this.myService.chosenArticle.articleNum=i;
      }
    } 
 }
 
}
