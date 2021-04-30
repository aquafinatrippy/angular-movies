import { Component, OnInit } from '@angular/core';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss'],
})
export class EditMovieComponent implements OnInit {
  constructor() {}

  model: movieDTO = {
    title: 'test',
    inTheaters: true,
    summary: 'any',
    releaseDate: new Date(),
    trailer: 'abc',
    poster: '',
  };

  ngOnInit(): void {}

  saveChanges(movieCreation: movieCreationDTO) {}
}
