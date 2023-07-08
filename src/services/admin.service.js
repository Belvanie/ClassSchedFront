import axios from "axios";
import authHeader from "./auth-header";

// API endpoint
const DATA_URL = '';

class AdminService {
    addClassroom(data) {
        return axios
            .post(
                DATA_URL + '/salles', 
                {
                    code: data.code,
                    name: data.name
                },
                {
                    headers: authHeader()
                }
            );
    }

    addCourse(data) {
        return axios
            .post(
                DATA_URL + '/ues', 
                {
                    code: data.code,
                    name: data.name
                },
                {
                    headers: authHeader()
                }
            );
    }

    addDepartment(data) {
        return axios
            .post(
                DATA_URL + '/departements',
                {
                    code: data.code,
                    name: data.name
                },
                {
                    headers: authHeader()
                }
            );
    }
    addFiliere(data) {
        return axios
            .post(
                DATA_URL + '/filieres', 
                {
                    code: data.code,
                    name: data.name,
                    code_departement: data.dep
                },
                {
                    headers: authHeader()
                }
            );
    }

    addLevel(data) {
        return axios
            .post(
                DATA_URL + '/niveaux', 
                {
                    code: data.code,
                    name: data.name
                },
                {
                    headers: authHeader()
                }
            );
    }

    addOption(data) {
        return axios
            .post(
                DATA_URL + '/options', 
                {
                    code: data.code,
                    name: data.name
                },
                {
                    headers: authHeader()
                }
            );
    }

    addReservation(data) {
        return axios
            .post(
                DATA_URL + '/reservations', 
                {
                    salle: data.salle,
                    date: data.date,
                    heure_debut: data.debut,
                    heure_fin: data.fin,
                    motif: data.motif
                },
                {
                    headers: authHeader()
                }
            );
    }
}

export default new AdminService();