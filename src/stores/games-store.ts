import axios from "axios";
import { IGame } from "../Types/game.interface";
import { makeAutoObservable } from 'mobx'

class GamesStore {
    games: IGame[] = [];

    constructor() {
        makeAutoObservable(this)
    }

    fetchTrendGames = async (pageNumber:number) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}games/lists/main?&discover=true&page_size=10&page=${pageNumber}&key=${process.env.REACT_APP_API_KEY}`)
            this.games = [...this.games, ...response.data.results]
        } catch (error) {
            console.log(error);
        }
    }

    fetchReleasedGames = async (pageNumber:number) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}games/lists/main?&discover=true&ordering=-released&page_size=10&page=${pageNumber}&key=${process.env.REACT_APP_API_KEY}`)
            this.games = [...this.games, ...response.data.results]
        } catch (error) {
            console.log(error);
        }
    }

    fetchRatingGames = async (pageNumber:number) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}games/lists/main?&discover=true&ordering=-rating&page_size=10&page=${pageNumber}&key=${process.env.REACT_APP_API_KEY}`)
            this.games = [...this.games, ...response.data.results]
        } catch (error) {
            console.log(error);
        }
    }


    addToFav = (id: number) => {
        
    }
}

export default new GamesStore()