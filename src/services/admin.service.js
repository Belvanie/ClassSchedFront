import axios from "axios";
import authHeader from "./auth-header";

// API endpoints
const BASE_URL = 'http://127.0.0.1:8000/';
const DATA_URL = BASE_URL + 'unité/';

class AdminService {
    addClassroom(data) {
        return axios
            .post(
                DATA_URL + '/salles', 
                {
                    codeUE: data.code,
                    intitule: data.name
                },
                {
                    headers: authHeader()
                }
            );
    }

    addCourse(data) {
        let formData = new FormData()
        formData.append('codeUE', data.code)
        formData.append('intitule', data.name)
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        return axios
            .post(
                DATA_URL + 'creer_ue/', 
                formData,
                {
                    headers: authHeader()
                }
            );
    }

    updateCourse(data) {
        let formData = new FormData()
        formData.append('codeUE', data.code)
        formData.append('codeNew', data.codeNew)
        formData.append('intitule', data.name)
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        return axios
            .post(
                DATA_URL + 'modifier_ue/', 
                formData,
                {
                    headers: authHeader()
                }
            );
    }

    addDepartment(data) {
        let formData = new FormData()
        formData.append('codeDepartement', data.code)
        formData.append('nomDepartement', data.name)
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        return axios
            .post(
                DATA_URL + 'creer_departement/',
                formData,
                {
                    headers: authHeader()
                }
            );
    }

    updateDepartment(data) {
        let formData = new FormData()
        formData.append('codeDepartement', data.code)
        formData.append('codeNew', data.codeNew)
        formData.append('nomDepartement', data.name)
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        return axios
            .post(
                DATA_URL + 'modifier_departement/',
                formData,
                {
                    headers: authHeader()
                }
            );
    }

    addFiliere(data) {
        let formData = new FormData()
        formData.append('codeFiliere', data.code)
        formData.append('nomFiliere', data.name)
        formData.append('codeDepartement', data.dep)
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        return axios
            .post(
                DATA_URL + 'creer_filiere/', 
                formData,
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
        let formData = new FormData()
        formData.append('codeOption', data.code)
        formData.append('nomOption', data.name)
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        return axios
            .post(
                DATA_URL + 'creer_option/', 
                formData,
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