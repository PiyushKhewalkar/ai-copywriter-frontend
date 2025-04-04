import axios from "axios";

const API_URL = "https://ai-copywriter-backend.onrender.com"

export const fetchAllPersona = async() => {
    try {

        const response = await axios.get(`${API_URL}/api/persona`)

        return response.data.allPersona
        
    } catch (error) {
        console.error("Error fetching users:", error);
      return [];

    }
}

export const generatePersona = async(userInputs) => {
    try {

        const response = await axios.post(`${API_URL}/api/persona/generate`, userInputs)

        return response.data.newPersona
        
    } catch (error) {
        console.error("Error fetching users:", error);
      return [];
    }
}