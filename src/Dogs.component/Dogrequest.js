import axios from "axios"

const Api_url= "https://api.thedogapi.com/v1"
const Api_key = "live_L3N8ojigHckPbff7z42weTNne13ZrAA9usryFft9UAlJaHWYXkmmLxVMAFpr4ftc"

export function reqDog(limit = 5,dogBreeds) {
    return axios.get(`${Api_url}/images/search?limit=${limit}&breed_ids=${dogBreeds.length > 0 ? dogBreeds.join(","):""}`,{
        headers: {
            "x-api-key":Api_key 
        }
    })
}

export function getBreeds(limit = 5, randombredd) {
    return axios.get(Api_url+`/breeds/?limit=${limit}&page=${randombredd}`,{
        headers:{
            "x-api-key":Api_key 
        }
    })
}