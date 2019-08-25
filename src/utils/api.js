const api = "http://localhost:3001";

let token = localStorage.token;

const headers = {
    Authorization: token
};

//add new user
export const addUser = user =>
    fetch(`${api}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
        .then(data => data);

//login
export const login = user =>
    fetch(`${api}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
        .then(data => data);

//upload to yuuvis
export const upload = item =>
    fetch(`${api}/yuuvis/store`, {
        method: "POST",
        headers: {
            ...headers
        },
        body: JSON.stringify(item)
    }).then(res => res.json())
        .then(data => data);

//Search receipts
export const search = query =>
    fetch(`${api}/yuuvis/search`, {
        method: "POST",
        headers: {
            ...headers
        },
        body: query
    }).then(res => res.json())
        .then(data => data);