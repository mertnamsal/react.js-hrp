import axios from "axios";

const LOGIN = "";

class AuthService{
    getAllAdmins() { 
        return axios.get(LOGIN);
    }

}


export default new AuthService();