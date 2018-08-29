import { Component} from '@angular/core';
import { ArticleShowService } from "../shared/services/articleShow.service";

@Component({
  selector: 'app-article-info-component',
  templateUrl: './article-info-component.component.html',
  styleUrls: ['./article-info-component.component.css']
})
export class ArticleInfoComponentComponent {
  
  constructor(private myService:ArticleShowService) { }
   
  articleChosen=this.myService.chosenArticle;
  articleArray=this.myService.articleArray; 
  
}
