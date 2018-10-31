import axios from "axios";

export default {
    // Gets all users
    getUsers: function () {
        return axios.get("/api/users");

    },
    // Saves a book to the database
    saveUser: function (userData) {
        return axios.post("/api/users", userData);
    }
};