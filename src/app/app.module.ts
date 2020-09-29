import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import { CardsComponent } from './component/cards/cards.component';
import { QuoteDetailsComponent } from './component/quote-details/quote-details.component';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CardsComponent,
    QuoteDetailsComponent,
    DateCountPipe,
    HighlightDirective,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
