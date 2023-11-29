import axios from 'axios'

const BASE_URL = 'https://api.rawg.io/api/';


enum Status {
    Error = 'error',
    Success = 'success'
}

export const getGames = async () => {
    try {
        const response = await axios.get(`${BASE_URL}games?token&key=86ef7631fd024e48945db2d46ed86842`)
        console.log(response.data);
        
        return response.data;
    } catch (error) {
        console.log(error);
        return { games: [], status: Status.Error}
    }
}