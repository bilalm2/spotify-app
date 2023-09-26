export function populateArtists(artists) {
    if (elementExists("Artist1")) {
        for (let i = 0; i < 5; i++) {
            document.getElementById(`Artist${i + 1}`).innerText = artists.items[i].name;

            const image = new Image(60, 60);
            image.src = artists.items[i].images[0].url;
            document.getElementById(`ArtistImage${i + 1}`).appendChild(image);

            document.getElementById(`url${i + 1}`).setAttribute("href", artists.items[i].external_urls.spotify);
        }
    }
}

function elementExists(id) {
    return document.getElementById(id) !== null;
}