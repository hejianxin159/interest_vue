import { request } from "./request";

export function login(email, password) {
    return request(
        {
            method: 'POST',
            url: 'account/login',
            data: {
                email,
                password
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: [function(data) {
              let ret = '';
              for(let it in data) {
                  ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
              }
              return ret
        }],
        }
    )
}

export function logout() {

}

export function register() {

}