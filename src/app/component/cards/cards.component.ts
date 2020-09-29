import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  quotes = [
    new Quote('Paul', 'Elon Musk', 'Its OK to have your eggs in one basket as long as you control what happens to that basket.', new Date('2020/8/4')),
    new Quote('Jeff', 'Bob Marley', 'Do not worry about a thing, cause every little thing gonna be all right', new Date('2020/7/2')),
    new Quote('Kennedy', 'Muhammad Ali', 'The fight is won or lost far away from witnesses - behind the lines, in the gym, and out there on the road, long before I dance under those lights', new Date('2020/9/2')),
    new Quote('Francis', 'Steve Jobs', 'Your time is limited, so don not waste it living someones life. Do not be trapped by dogma – which is living with the results of other peoples thinking', new Date('2020/6/26'))
    

  ]
   small: number;
  large: number;
  numCount: number;

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
  getHighestUpVote() {
    this.small = 0
    this.large = 0
    for (this.numCount = 0; this.numCount < this.quotes.length; this.numCount++) {
      this.large = this.quotes[this.numCount].upvote;
      if (this.large > this.small) { this.small = this.large }
    }
    return this.small
  }
}
