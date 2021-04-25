import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-teather',
  templateUrl: './edit-teather.component.html',
  styleUrls: ['./edit-teather.component.scss']
})
export class EditTeatherComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      
    })
  }

}
