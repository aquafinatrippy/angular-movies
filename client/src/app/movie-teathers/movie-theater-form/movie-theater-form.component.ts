import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { movieTheatersCreationDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.scss'],
})
export class MovieTheaterFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;

  @Output()
  onSaveChanges = new EventEmitter<movieTheatersCreationDTO>();

  @Input()
  model: movieTheatersCreationDTO;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', { validators: [Validators.required] }],
    });
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
          }
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }
}
