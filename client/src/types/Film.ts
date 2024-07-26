import { ReactNode } from "react";

interface Actor {
  name: string;
  imageUrl: string;
}

export interface Film {
  trailerUrl: string;
  ratings: Rating[];
  _id: string;
  filmId: string;
  title: string;
  director: string;
  releaseYear: number;
  posterImageUrlA: string;
  bannerImageUrlB: string;
  actors: Actor[];
  filmOverview: string;
  publishYear: ReactNode;
}

export interface Rating {
  rating: number;
  filmId: string;
  ratings: Rating[];
}
