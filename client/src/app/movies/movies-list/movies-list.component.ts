import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() items: any;

  remove(index) {
    this.items.splice(1, index);
  }
}
