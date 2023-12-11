async function jsonRequest(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }
    const jsonResult = await response.json();
    return jsonResult;
}