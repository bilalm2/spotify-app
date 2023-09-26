export function populateProfile(profile) {
    if (elementExists("displayName")) {
        document.getElementById("displayName").innerText = profile.display_name;
    }
    if (profile.images[0]) {
        const profileImage = new Image(150, 150);
        profileImage.src = profile.images[0].url;
        if (elementExists("avatar")) {
            document.getElementById("avatar").appendChild(profileImage);
        }
        if (elementExists("imgUrl")) {
            document.getElementById("imgUrl").innerText = profile.images[0].url;
        }
    }
    if (elementExists("id")) {
        document.getElementById("id").innerText = profile.id;
    }
    if (elementExists("email")) {
        document.getElementById("email").innerText = profile.email;
    }
    if (elementExists("uri")) {
        document.getElementById("uri").innerText = profile.uri;
        document.getElementById("uri").setAttribute("href", profile.external_urls.spotify);
        document.getElementById("url").innerText = profile.href;
        document.getElementById("url").setAttribute("href", profile.href);
    }
}

function elementExists(id) {
    return document.getElementById(id) !== null;
}