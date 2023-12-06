async function jsonRequest(url) {
    const response = await fetch(url);
    const jsonResult = await response.json();
    return jsonResult;
}