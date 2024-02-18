import Cookies from "js-cookie";

export const login = () => {
    Cookies.set('loggedIn','true' , { expires: 2 });
};


export const logout = () => {
    Cookies.remove('loggedIn')
    Cookies.remove('username')
}

export const isAuthenticate = () =>{
    return Cookies.get('loggedIn') === 'true';
}