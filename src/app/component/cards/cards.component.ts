import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  quotes = [
    new Quote('Kennedy', 'Muhammad Ali', 'The fight is won or lost far away from witnesses - behind the lines, in the gym, and out there on the road, long before I dance under those lights', new Date(2020, 9, 2)),
    new Quote('Francis', 'Alexander Bell', 'Your time is limited, so don nott waste it living someone elses life. Do not be trapped by dogma – which is living with the results of other peoples thinking', new Date(2020, 9, 26)),
    new Quote('Jeff', 'Bob Marley','Do not worry about a thing, cause every little thing gonna be all right', new Date(2020, 9, 2)),

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
