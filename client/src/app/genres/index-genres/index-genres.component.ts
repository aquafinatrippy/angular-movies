import { Component, OnInit } from '@angular/core';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-index-genres',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.scss']
})
export class IndexGenresComponent implements OnInit {

  constructor(private genresService: GenresService) { }

  ngOnInit(): void {
    const genres = this.genresService.getAll()
    console.log(genres)
  }

}
