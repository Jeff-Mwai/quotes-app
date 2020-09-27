import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name: string;
  author: string;
  quote: string;
  quoteDescription: string;
  newQuote: any;
  date: Date;
  @Output() emitNewQuote = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.newQuote = new Quote(this.name, this.author, this.quote, this.quoteDescription, this.date)
    this.name = '';
    this.author = '';
    this.quote = '';
    this.quoteDescription = '';
    this.emitNewQuote.emit(this.newQuote)

  }

}
