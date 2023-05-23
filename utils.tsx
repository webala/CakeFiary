import axios from "axios"

export const fetchFlavours = async () => {
   const response = await axios.get('http://localhost:8000/flavour')
   return response.data
}