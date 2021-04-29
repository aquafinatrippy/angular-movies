import { Component, OnInit } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'AngularMovies',
      }),
    ],
    zoom: 14,
    center: latLng(59.40665604695237, 24.740180969238285),
  };

  layers: Marker<any>[] = [];

  handleMapClick(event: LeafletMouseEvent) {
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log({ latitude, longitude });
    this.layers = [];
    this.layers.push(marker([latitude, longitude]));
  }
}
