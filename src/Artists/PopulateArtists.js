export function populateArtists(artists) {
    document.getElementById("firstArtist").innerText = artists.items[0].name;
    document.getElementById("secondArtist").innerText = artists.items[1].name;
    document.getElementById("thirdArtist").innerText = artists.items[2].name;
    document.getElementById("fourthArtist").innerText = artists.items[3].name;
    document.getElementById("fifthArtist").innerText = artists.items[4].name;

    const firstImage = new Image(60, 60);
    firstImage.src = artists.items[0].images[0].url;
    document.getElementById("firstArtistImage").appendChild(firstImage);

    const secondImage = new Image(60, 60);
    secondImage.src = artists.items[1].images[0].url;
    document.getElementById("secondArtistImage").appendChild(secondImage);

    const thirdImage = new Image(60, 60);
    thirdImage.src = artists.items[2].images[0].url;
    document.getElementById("thirdArtistImage").appendChild(thirdImage);

    const fourthImage = new Image(60, 60);
    fourthImage.src = artists.items[3].images[0].url;
    document.getElementById("fourthArtistImage").appendChild(fourthImage);

    const fifthImage = new Image(60, 60);
    fifthImage.src = artists.items[4].images[0].url;
    document.getElementById("fifthArtistImage").appendChild(fifthImage);

    document.getElementById("firstUrl").setAttribute("href", artists.items[0].external_urls.spotify);

    document.getElementById("secondUrl").setAttribute("href", artists.items[1].external_urls.spotify);

    document.getElementById("thirdUrl").setAttribute("href", artists.items[2].external_urls.spotify);

    document.getElementById("fourthUrl").setAttribute("href", artists.items[3].external_urls.spotify);

    document.getElementById("fifthUrl").setAttribute("href", artists.items[4].external_urls.spotify);
}