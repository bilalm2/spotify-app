export function populateTracks(tracks) {
    const previewUrl = tracks.items[0].preview_url;
    if (elementExists("Track1")) {
        for (let i = 0; i < 5; i++) {
            document.getElementById(`Track${i + 1}`).innerText = tracks.items[i].name;

            const image = new Image(60, 60);
            image.src = tracks.items[i].album.images[0].url;
            document.getElementById(`TrackImage${i + 1}`).appendChild(image);

            if (previewUrl !== null) {
                document.getElementById(`url${i + 1}`).setAttribute("href", previewUrl);
            } else {
                document.getElementById(`url${i + 1}`).setAttribute("href", tracks.items[0].external_urls.spotify);
            }
        }
    }
}

function elementExists(id) {
    return document.getElementById(id) !== null;
}