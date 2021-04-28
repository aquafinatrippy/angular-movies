import { Component, OnInit } from '@angular/core';
import { movieTheatersCreationDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-create-theater',
  templateUrl: './create-theater.component.html',
  styleUrls: ['./create-theater.component.scss'],
})
export class CreateTheaterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  saveChanges(movieTheater: movieTheatersCreationDTO) {
    console.log(movieTheater);
  }
}
