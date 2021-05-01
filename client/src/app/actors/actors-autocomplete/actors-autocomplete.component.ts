import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-actors-autocomplete',
  templateUrl: './actors-autocomplete.component.html',
  styleUrls: ['./actors-autocomplete.component.scss'],
})
export class ActorsAutocompleteComponent implements OnInit {
  constructor() {}

  control: FormControl = new FormControl();

  actors = [
    {
      name: 'tom',
      picture:
        'https://yt3.ggpht.com/ytc/AAUvwni51a2VLg1X3uY7y-kR1lX5BkqGsl1d8zYKP0-M1A=s900-c-k-c0x00ffffff-no-rj',
    },
    {
      name: 'dex',
      picture:
        'https://yt3.ggpht.com/ytc/AAUvwni51a2VLg1X3uY7y-kR1lX5BkqGsl1d8zYKP0-M1A=s900-c-k-c0x00ffffff-no-rj',
    },
    {
      name: 'fexs',
      picture:
        'https://yt3.ggpht.com/ytc/AAUvwni51a2VLg1X3uY7y-kR1lX5BkqGsl1d8zYKP0-M1A=s900-c-k-c0x00ffffff-no-rj',
    },
  ];

  selectedActors = [];

  originalActors = this.actors;

  columnsToDisplay = ['picture', 'name', 'character', 'actions'];

  @ViewChild(MatTable)
  table: MatTable<any>;

  ngOnInit(): void {
    this.control.valueChanges.subscribe((value) => {
      this.actors = this.originalActors;
      this.actors = this.actors.filter(
        (actor) => actor.name.indexOf(value) !== -1
      );
    });
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value);
    this.selectedActors.push(event.option.value);
    this.control.patchValue('');
    if (this.table !== undefined) {
      this.table.renderRows();
    }
  }

  remove(actor) {
    const index = this.selectedActors.findIndex((a) => a.name === actor.name);
    this.selectedActors.splice(index, 1);
    this.table.renderRows();
  }
}
