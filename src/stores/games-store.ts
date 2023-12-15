import axios from "axios";
import { IGame } from "../Types/game.interface";
import { makeAutoObservable } from "mobx";

class GamesStore {
  games: IGame[] = [];
  selectedOrder = "Relevance";
  prevSelectedOrder = "";

  constructor() {
    makeAutoObservable(this);
  }

  fetchGames = async (pageNumber: number) => {
    let ordering = "";

    if (this.selectedOrder === "Relevance") {
      ordering = "-relevance";
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}games/lists/main?&discover=true&ordering=${ordering}&page_size=10
                                                &page=${pageNumber}&key=${process.env.REACT_APP_API_KEY}`
      );

      this.games = [...this.games, ...response.data.results];
    } else if (this.selectedOrder === "Released") {
      ordering = "-released";
      const response =
        await axios.get(`${process.env.REACT_APP_API_BASE_URL}games/lists/main?&discover=true&ordering=-released&page_size=10
                                            &page=${pageNumber}&key=${process.env.REACT_APP_API_KEY}`);

      this.games = [...this.games, ...response.data.results];
    } else if (this.selectedOrder === "Rating") {
      ordering = "-rating";
      const response =
        await axios.get(`${process.env.REACT_APP_API_BASE_URL}games/lists/main?&discover=true&ordering=-rating&page_size=10
                                            &page=${pageNumber}&key=${process.env.REACT_APP_API_KEY}`);
      this.games = [...this.games, ...response.data.results];
    }
  };

  setOrder = (order: string) => {
    this.games = [];
    this.selectedOrder = order;
  };

  setPage = () => {
    this.prevSelectedOrder = this.selectedOrder;
  };

  addToFav = (id: number) => {};
}

export default new GamesStore();
