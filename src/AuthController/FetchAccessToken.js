export async function fetchAccessToken(clientId, code){
    const verifier = localStorage.getItem("verifier");

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code",code);
    params.append("redirect_uri", "https://spotifystats4.netlify.app/callback");
    params.append("code_verifier", verifier);

    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded"},
        body: params
    });
    const { access_token } = await result.json();
    sessionStorage.setItem("access_token", access_token);
    return access_token;
}