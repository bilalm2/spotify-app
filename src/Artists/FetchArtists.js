export async function getArtists(token){
    const result = await fetch("https://api.spotify.com/v1/artists", {
        method: "GET", headers: { Authorization: `Bearer ${token}`}
    });
    return await result.json();
}