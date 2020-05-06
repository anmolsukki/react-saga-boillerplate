export default class Api {
    static getUsers() {
        const URL = `${process.env.REACT_APP_BASE_URL}/users`;
        return fetch(URL, {
            method: 'GET'
        });
    }
}
