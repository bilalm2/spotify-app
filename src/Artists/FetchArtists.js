    export async function fetchTopArtists(token){
        const result = await fetch("https://api.spotify.com/v1/me/top/artists", {
            method: "GET", headers: { Authorization: `Bearer ${token}`}
        });
        return await result.json();
    }