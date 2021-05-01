export interface movieCreationDTO {
  title: string;
  summary: string;
  inTheaters: boolean;
  trailer: string;
  releaseDate: Date;
  poster: File;
  genresIds: number[];
}

export interface movieDTO {
  title: string;
  summary: string;
  inTheaters: boolean;
  trailer: string;
  releaseDate: Date;
  poster: string;
}
