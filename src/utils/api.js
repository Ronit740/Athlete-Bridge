export async function fetchData(url) {
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}
