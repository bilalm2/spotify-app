import { getArtists } from "./Artists/FetchArtists.js";
import { getAccessToken } from "./AuthController/GetAccessToken.js";
import { redirectToAuthFlow } from "./AuthController/RedirectToAuthFlow.js";


const clientId = "f8435734ad604359be9029b20de31971";
const code = undefined;

if(!code){
    redirectToAuthFlow(clientId);
}
else {
    const accessToken = await getAccessToken(clientId, code);
    const artists = await getArtists(accessToken);
}