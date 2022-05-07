
import axios from "axios";

const login = async (credentials) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/login`,
            credentials
        );

        return response.data;
    } catch (error) {
        console.error(error.message);
        throw new Error('Service is not available at the moment')
    }
}
export default login;