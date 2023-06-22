import axios from "axios";
import authHeader from "./auth-header";

const DATA_URL = 'http://localhost:3000/api/';

class AdminService {
    getAdmins() {
        return axios.get(DATA_URL + "admins", { headers: authHeader() });
    }
}

export default new AdminService();