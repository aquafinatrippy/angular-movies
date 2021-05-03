import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { genreDTO } from './genres.model';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  constructor(private http: HttpClient) {}

  getAll(): genreDTO[] {
    return [{ id: 1, name: 'test' }];
    // return this.http.get<genreDTO[]>("")
  }
}
