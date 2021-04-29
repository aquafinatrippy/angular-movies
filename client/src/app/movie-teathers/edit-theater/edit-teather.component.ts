import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheatersDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-edit-teather',
  templateUrl: './edit-teather.component.html',
  styleUrls: ['./edit-teather.component.scss'],
})
export class EditTeatherComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  model: movieTheatersDTO = {
    name: 'test',
    latitude: 59.4074914700568,
    longitude: 24.734078943729404,
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {});

    console.log(this.model);
  }

  saveChanges(movieTheater: movieTheatersDTO) {
    console.log(movieTheater);
  }
}
