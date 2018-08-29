import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ArticleShowService } from './shared/services/articleShow.service';
import { ArticlesListComponentComponent } from './articles-list-component/articles-list-component.component';
import { ArticleInfoComponentComponent } from './article-info-component/article-info-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ArticlesListComponentComponent,
    ArticleInfoComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ArticleShowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
