import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.scss'],
})
export class CreateGenreComponent implements OnInit {
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        {
          validators: [Validators.required, Validators.minLength(3)],
        },
      ],
    });
  }

  saveChanges() {
    this.router.navigate(['/genres']);
  }

  getErrorMsgFieldName() {
    const field = this.form.get('name');
    if (field.hasError('required')) {
      return 'The name field is required';
    }
    if (field.hasError('minLength')) {
      return 'Min length is 3';
    }
    return '';
  }
}
