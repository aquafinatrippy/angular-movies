import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  constructor() {}

  @Input()
  maxRating = 5;
  @Input()
  selectedRate = 0;
  @Output()
  onRating: EventEmitter<number> = new EventEmitter<number>();

  prevRate = 0;
  maxRatingArr = [];

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }

  handleMouseEnter(index: number) {
    this.selectedRate = index + 1;
  }
  handeMouseLeave() {
    if (this.prevRate !== 0) {
      this.prevRate = this.selectedRate;
    } else {
      this.selectedRate = 0;
    }
  }
  rate(index: number) {
    this.selectedRate = index + 1;
    this.prevRate = this.selectedRate;
    this.onRating.emit(this.selectedRate);
  }
}
