import { get, post } from "./api.js";
import { removeUserData, setUserData } from "./util.js";

export async function login(email, password) {
    const user = await post('/users/login', { email, password });

    const userData = {
        email: user.email,
        id: user._id,
        accessToken: user.accessToken
    };
    setUserData(userData);
}


export async function register(email, password) {
    const user = await post('/users/register', { email, password });

    const userData = {
        email: user.email,
        id: user._id,
        accessToken: user.accessToken
    };
    setUserData(userData);
    return user;
}

export async function logout(ctx) {
    get('/users/logout')
    removeUserData('userData');
    ctx.page.redirect('/dashboard')
}