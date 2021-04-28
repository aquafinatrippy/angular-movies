import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheatersCreationDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-edit-teather',
  templateUrl: './edit-teather.component.html',
  styleUrls: ['./edit-teather.component.scss'],
})
export class EditTeatherComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  model: movieTheatersCreationDTO = { name: 'test' };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {});
  }

  saveChanges(movieTheater: movieTheatersCreationDTO) {
    console.log(movieTheater);
  }
}
