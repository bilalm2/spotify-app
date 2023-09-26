export async function fetchTopTracks(token){
    const result = await fetch("https://api.spotify.com/v1/me/top/tracks", {
        method: "GET", headers: { Authorization: `Bearer ${token}`}
    });
    return await result.json();
}