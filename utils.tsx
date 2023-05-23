import axios from "axios"

export const fetchFlavours = async () => {
   const response = await axios.get('http://localhost:8000/flavour')
   return response.data
}

export const fetchCakes = async () => {
   const response = await axios.get('http://localhost:8000/cake')
   return response.data
}

export const fetchAddons = async () => {
   const response = await axios.get('http://localhost:8000/addon')
   return response.data
}