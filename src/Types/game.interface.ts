interface Screenshot {
  id: number;
  image: string;
}

export interface IGame {
    id: number,
    slug: string,
    name: string,
    released: number,
    tba: boolean,
    background_image: string,
    rating: number,
    rating_top: number,
    short_screenshots: Screenshot[];
}

export interface GamesApiResponse {
  results?: IGame[];
  status: string;
}