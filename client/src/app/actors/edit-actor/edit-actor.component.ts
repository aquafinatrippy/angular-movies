import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorDTO } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.scss'],
})
export class EditActorComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  model: actorDTO = {
    name: 'Tom tom',
    dateOfBirth: new Date(),
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Roman_S.svg/1200px-Roman_S.svg.png',
    biography: 'default vaule',
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // alert(params.id);
    });
  }

  saveChanges(actorDTO: actorDTO) {
    console.log(actorDTO);
  }
}
