import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUpperCase } from '../../validators/firstLetterUpperCase';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.scss'],
})
export class FormGenreComponent implements OnInit {
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  form: FormGroup;

  @Input()
  model: genreCreationDTO;

  @Output()
  onSaveChanges: EventEmitter<genreCreationDTO> = new EventEmitter<genreCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(3),
            firstLetterUpperCase(),
          ],
        },
      ],
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }

  getErrorMsgFieldName() {
    const field = this.form.get('name');
    if (field.hasError('required')) {
      return 'The name field is required';
    }
    if (field.hasError('minLength')) {
      return 'Min length is 3';
    }
    if (field.hasError('firstLetterUpperCase')) {
      return field.getError('firstLetterUpperCase').message;
    }
    return '';
  }
}
