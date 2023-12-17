import axios from "axios";
import { IGame } from "../Types/game.interface";
import { makeAutoObservable } from "mobx";

export interface IUserGame {
  id?: number;
  game: IGame;
}

class GamesStore {
  games: IGame[] = [];
  favGames: IUserGame[] = [];
  cartGames: IUserGame[] = [];
  selectedOrder = "Relevance";
  prevSelectedOrder = "";

  constructor() {
    makeAutoObservable(this);
    this.loadFavFromStorage();
    this.loadProductsFromStorage();
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

  addToFav = (id: number) => {
    const game = this.games.find((game) => game.id === id);

    if (game && !this.favGames.some((favGame) => favGame.id === id)) {
      const favoriteGame: IUserGame = { game };
      this.favGames.push(favoriteGame);
      localStorage.setItem("favorites", JSON.stringify(this.favGames));
      console.log(this.favGames);
    }
  };

  removeFromFav = (id: number) => {
    this.favGames = this.favGames.filter((game) => game.game.id !== id);
    localStorage.setItem("favorites", JSON.stringify(this.favGames));
  };

  loadFavFromStorage() {
    const favoritesFromStorage = localStorage.getItem("favorites");
    if (favoritesFromStorage) {
      this.favGames = JSON.parse(favoritesFromStorage);
    }
  }

  isFavAdded(id: number): boolean {
    return this.favGames.some((game) => game.game.id === id);
  }

  addToCart = (id: number) => {
    const game = this.games.find((game) => game.id === id);

    if (game && !this.cartGames.some((cartGame) => cartGame.id === id)) {
      const cartGame: IUserGame = { game };
      this.cartGames.push(cartGame);
      localStorage.setItem("products", JSON.stringify(this.cartGames));
      console.log(this.cartGames);
    }
  };

  removeFromCart = (id: number) => {
    this.cartGames = this.cartGames.filter((game) => game.game.id !== id);
    localStorage.setItem("products", JSON.stringify(this.cartGames));
  };

  loadProductsFromStorage() {
    const productsFromStorage = localStorage.getItem("products");
    if (productsFromStorage) {
      this.cartGames = JSON.parse(productsFromStorage);
    }
  }

  isProductAdded(id: number): boolean {
    return this.cartGames.some((game) => game.game.id === id);
  }
}

export default new GamesStore();
