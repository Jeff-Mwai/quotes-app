import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  quotes = [
    new Quote('Jeff', 'Bob Marley','Do nott worry about a thing, cause every little thing gonna be all right.', new Date(2020, 9, 2)),
    new Quote('Francis Mbatia', 'Alexander Bell', 'Or life will enjoy you', new Date(2020, 9, 26)),
    new Quote('Daisy Sawe', 'Kendrick Lamar', 'Everybody else is taken', new Date(2020, 9, 17)),

  ]
num1: number;
num2: number;
i: number;

  constructor() { }

  ngOnInit(): void {
  }
  upvote(i) {
    this.quotes[i].upvote++
  }
  downvote(i) {
    this.quotes[i].downvote++
  }
  deleteVote(i) {
    this.quotes.splice(i, 1)
  }
  addQuote(newQoute) {
    this.quotes.push(newQoute);
  }
 /*  highlight() {
    this.num1 = 0;
    this.num2 = 0;
    for(this.i=0; this.i<this.quotes.length; this.i++){
    this.num2 = this.quotes[this.i].upvote;
    if (this.num2 > this.num1) {
    this.num1=this.num2;
    }return this.num1
    }
  } */
}
