import axios from "axios";
import authHeader from "./auth-header";

// API endpoints
const BASE_URL = 'http://127.0.0.1:8000/';
const DATA_URL = BASE_URL + 'unité/';
// const PLANNING_URL = BASE_URL + 'plannification/';
const USER_URL = BASE_URL + 'utilisateur/';

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
        let formData = new FormData()
        formData.append('salle', data.salle)
        formData.append('date', data.date)
        formData.append('heure_debut', data.debut)
        formData.append('heure_fin', data.fin)
        formData.append('motif', data.motif)
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        return axios
            .post(
                USER_URL + 'reservation/', 
                formData,
                {
                    headers: authHeader()
                }
            );
    }
}

export default new AdminService();
