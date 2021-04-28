import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateTheaterComponent } from './movie-teathers/create-theater/create-theater.component';
import { EditTeatherComponent } from './movie-teathers/edit-theater/edit-teather.component';
import { IndexTheaterComponent } from './movie-teathers/index-theater/index-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'create/movie',
    component: CreateMovieComponent,
  },

  {
    path: 'movies/filter',
    component: MovieFilterComponent,
  },
  {
    path: 'movies/edit/:id',
    component: EditMovieComponent,
  },

  {
    path: 'genres',
    component: IndexGenresComponent,
  },
  {
    path: 'genres/create',
    component: CreateGenreComponent,
  },
  {
    path: 'genres/edit/:id',
    component: EditGenreComponent,
  },

  {
    path: 'actors',
    component: IndexActorsComponent,
  },
  {
    path: 'actors/create',
    component: CreateActorComponent,
  },
  {
    path: 'actors/edit/:id',
    component: EditActorComponent,
  },

  {
    path: 'theaters',
    component: IndexTheaterComponent,
  },
  {
    path: 'theater/create',
    component: CreateTheaterComponent,
  },
  {
    path: 'theater/edit/:id',
    component: EditTeatherComponent,
  },

  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
