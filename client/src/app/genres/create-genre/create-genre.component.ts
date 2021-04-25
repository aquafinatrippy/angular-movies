import { Component, OnInit } from '@angular/core';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.scss'],
})
export class CreateGenreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  saveChanges(genreCreationDTO: genreCreationDTO) {
    console.log(genreCreationDTO);
  }
}
