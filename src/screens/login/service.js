
export async function login(credentials) {
    const res = await fetch(process.env.REACT_APP_API_URL, {
        method: 'POST',
        body: JSON.stringify(credentials),
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
}
