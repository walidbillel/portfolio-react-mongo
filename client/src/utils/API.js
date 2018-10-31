import axios from "axios";

export default {
    // Gets all users
    getUsers: function () {
        return axios.get("http://localhost:3001/api/users");

    },
    // Saves a book to the database
    saveUser: function (userData) {
        return axios.post("http://localhost:3001/api/users", userData);
    }
};