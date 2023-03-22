import axios from 'axios';

export async function newCust(Customer) {
    return axios.post("http://localhost:9800/register", Customer)
}

export async function getlogin(emailpassarray) {
    return axios.post("http://localhost:9800/login", emailpassarray)
}

export async function Delete(emailpassarray) {
    return axios.post("http://localhost:9800/delete", emailpassarray)
}