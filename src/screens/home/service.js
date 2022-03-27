<<<<<<< HEAD
import axios from "axios";

export async function listUsers(page) {
    try {
        const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/users?page=${page}`)
        return res.data
    } catch (error) {
        const message = (error.response?.data?.error
            || error.message
            || 'Service is not available at the moment');
        console.log(message);
        throw new Error(message);
    }
=======

export async function listUsers(page) {
    const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/users?page=${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    let json = null
    try {
        json = await res.json()
    } catch (e) {
        console.error(e.message ||'error parsing json')
        throw new Error('Service is not available at the moment')
    }
    if (!res.ok) {
        throw new Error(json.error)
    }
    return json
>>>>>>> 0af5b68 (Use localstorage to remember token)
}
