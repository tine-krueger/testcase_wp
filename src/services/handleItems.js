export function getItems() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    try {
        return fetch('data/items.json', requestOptions)
        .then(response => response.json())

    } catch (error) {
        return { error: 'Json data not available!'}
    }

}