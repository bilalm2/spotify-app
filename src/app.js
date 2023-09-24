import {redirectToAuthCodeFlow} from './AuthController/RedirectToAuthFlow.js';
import {fetchAccessToken} from './AuthController/FetchAccessToken.js';
import {fetchProfile} from './Profile/FetchProfile.js'
import {populateUI} from './Artists/PopulateUI.js'


const clientId = "f8435734ad604359be9029b20de31971";
const params = new URLSearchParams(window.location.search);
const code = params.get("code");
const accessToken = sessionStorage.getItem("access_token");

if (!accessToken) {
    if (!code) {
        await redirectToAuthCodeFlow(clientId);
    } else {
        const accessToken = await fetchAccessToken(clientId, code);
        sessionStorage.setItem("access_token", accessToken);
    }
}

const profile = await fetchProfile(sessionStorage.getItem("access_token"));
populateUI(profile);





