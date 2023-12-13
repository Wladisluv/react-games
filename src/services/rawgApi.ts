import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;



enum Status {
    Error = 'error',
    Success = 'success'
}

export const getGames = async (page?: number | null) => {
    try {
      const pageNumber = page !== undefined ? page : 1;
      const response = await axios.get(`${BASE_URL}games?ordering=-rating&dates=2023-06-01,2023-12-31&page=${pageNumber}&key=${API_KEY}`);
  
      console.log(`page from service: ${pageNumber}`);
  
      return response.data;
    } catch (error) {
      console.log(error);
      return { games: [], status: Status.Error };
    }
  }
  

export const getCurrentGame = async (id:string) => {
    try {
        const response = await axios.get(`${BASE_URL}games/${id}?token&key=${API_KEY}`)
        
        return response.data;
    } catch (error) {
        console.log(error);
        return { game: {}, status: Status.Error}
    }
}

export const getAchievements = async (id:number) => {
    try {
        const response = await axios.get(`${BASE_URL}games/${id}/achievements?token&key=${API_KEY}`)
        
        return response.data;
    } catch (error) {
        console.log(error);
        return { games: [], status: Status.Error}
    }
}