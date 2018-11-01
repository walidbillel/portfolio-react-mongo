import axios from "axios";

export default {
    // Gets all users
    getUsers: function () {
        return axios.get("api/contact");

    },
    // Saves a book to the database
    saveUser: function (userData) {
        return axios.post("api/contact", userData);
    }
};

