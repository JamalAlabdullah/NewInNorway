import http from "./httpService";
import url from "../config/config.json";

const apiEndpoint = url.apiUrl + "/auth";


export  function login(email, password){
   return http.post(apiEndpoint, {email, password });
   
}








/*
import jwtDecode from 'jwt-decode';
import http from "./httpService";
import {url} from "../config.json";




const apiEndpoint = url.apiUrl + "/auth";
const tokenKey = "token";


http.setJwt(getJwt());

export async function login(email, password){
    const {data: jwt}= await http.post(apiEndpoint, {email, password });
    localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt){
    localStorage.setItem(tokenKey, jwt);

};



export function logout(){
    localStorage.removeItem(tokenKey);
};

export function getCurrentUser(){
    try {
        // we get json web token from localstorage, decodet to get 
        // the current user, and then we update the stae 
        const jwt = localStorage.getItem(tokenKey);
        return  jwtDecode(jwt);
      } catch (ex) {
          return null;
      }
};

export function getJwt(){
    return localStorage.getItem(tokenKey);
}
    

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    login,
    logout,
    getCurrentUser,
    loginWithJwt,
    getJwt
    
};

*/