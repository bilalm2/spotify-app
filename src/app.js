import { redirectToAuthCodeFlow } from './AuthController/RedirectToAuthFlow.js';
import { getAccessToken } from './AuthController/GetAccessToken.js';


const clientId = "f8435734ad604359be9029b20de31971";
if(typeof window !== undefined) {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
}
else {
    console.log("error")
}

if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
    const accessToken = await getAccessToken(clientId, code);
    console.log(accessToken);
}





