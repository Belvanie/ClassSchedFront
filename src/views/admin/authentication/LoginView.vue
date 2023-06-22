<template>
    <div class="container-fluid">
        <div class="row mx-5 px-5 py-3">
            <div class="col-2 mx-5 px-5">
                <router-link to="/admin" class="navbar-brand fw-bolder text-danger d-inline-flex align-items-center">
                    <img src="@/assets/logo.png" alt="logo" width="30" height="24" class="d-inline-block align-text-top"/>
                    <span class="mx-1">ClassSched</span>
                </router-link>
            </div>
        </div>
        <div class="row mx-5 text-center rounded shadow-lg">
            <div class="col-12 col-md-6 p-5">
                <div class="p-5 justify-content-center align-items-center">
                    <h2 class="fs-6 fw-normal text-uppercase text-center">
                        Bienvenue sur<br/><span class="fs-2 form-title">CLASS-SCHED</span>
                    </h2>
                    <p class="text-center mb-4 text-muted" style="font-size: 0.8rem;">
                        Connectez-vous &agrave; l'aide du login fourni par l'administrateur
                    </p>
                    <Form @submit="handleLogin" :validation-schema="schema" class="my-5">
                        <div class="row mb-3">
                            <div class="d-flex align-items-center position-relative">
                                <span class="position-absolute px-5"> <!--px-3-->
                                    <font-awesome-icon icon="user"></font-awesome-icon>
                                </span>
                                <Field class="form-control" name="login" id="login" placeholder="Login"/>
                            </div>
                            <ErrorMessage name="login" class="text-danger mt-2 error-field"/>
                        </div>
                        <div class="row mb-3">
                            <div class="d-flex align-items-center position-relative">
                                <span class="position-absolute px-5">
                                    <font-awesome-icon icon="key"></font-awesome-icon>
                                </span>
                                <Field class="form-control" type="password" name="password" id="password" placeholder="Mot de passe"/>
                                <span class="position-absolute end-0 px-5 mx-2">
                                    <font-awesome-icon icon="eye" id="password-eye"></font-awesome-icon>
                                </span>
                            </div>
                            <ErrorMessage name="password" class="text-danger mt-2 error-field"/>
                        </div>
                        <div class="form-group mb-3">
                            <button type="submit" class="btn-grad px-4 py-2" :disabled="loading">
                                <!-- <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div> -->
                                <span class="text-white fs-6">Connexion</span>
                            </button>
                        </div>
                        <div class="form-group">
                            <div v-if="message" class="border border-danger text-danger px-4 py-3 rounded">
                                {{ message }}
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
            <div class="col-md-6 d-none d-md-flex p-0 m-0 position-relative">
                <div class="right-side position-relative w-100 h-100">
                    <div class="position-absolute color-layer"></div>
                </div>
                <div class="bg-text position-absolute text-center top-50 start-50 translate-middle">
                    <img src="@/assets/logo.png" alt="logo" width="40" height="34" class="d-inline-block align-text-top"/>
                    <h2 class="text-white fw-bolder mb-3">CLASS-SCHED</h2>
                    <p class="text-white description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, voluptatum aut! Autem voluptatem dicta sequi pariatur? Itaque beatae laboriosam eveniet aut?</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

export default {
    name: 'LoginView',
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data() {
        const schema = yup.object().shape({
            login: yup.string().required("Le login est requis."),
            password: yup.string().required("Le mot de passe est requis."),
        });

        return {
            loading: false,
            message: "",
            show: true,
            schema,
        }
    },
    mounted() {
        const passwordEye = document.querySelector('#password-eye');
        const password = document.querySelector('#password');
        passwordEye.addEventListener('click', () => {
            const type = password.getAttribute('type') === 'password' ?'text' : 'password';
            password.setAttribute('type', type);
        });
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
    },
    created() {
        if (this.loggedIn) {
            // this.$router.push("/admin");
        }
    },
    methods: {
        handleLogin(admin) {
            this.loading = true;

            this.$store.dispatch("auth/login", admin).then(
                () => {
                    this.$router.push("/admin");
                },
                (error) => {
                    this.loading = false;
                    this.message = 
                        (error.response && error.response.data && error.response.data.message) ||
                        error.message ||
                        error.toString();
                }
            );
        },
    },
}
</script>

<style>
.form-title {
    color: #f73b66;
    font-weight: bolder;
}

.form-control {
    padding: 2% 10%;
}

.right-side {
    background-image: url("@/assets/management.jpg");
    filter: blur(4px);
    -webkit-filter: blur(4px);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.color-layer {
    background-color: rgba(153, 95, 119, 0.7);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
}

.error-field {
    font-size: 0.7rem;
    font-weight: bolder;
}

#password-eye {
    cursor: pointer;
}

.description {
    font-size: 0.85rem;
}
</style>