import axios from "axios";

export async function listUsers(page) {
    try {
        const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/users?page=${page}`)
        return res.data
    } catch (e) {
        console.error(e.message || 'error parsing json')
        throw new Error('Service is not available at the moment')
    }
}
