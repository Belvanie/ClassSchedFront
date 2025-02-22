<template>
    <div class="py-10">
        <h2 class="text-4xl font-semibold text-center my-5">Cr&eacute;er un compte</h2>
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto justify-center items-center">
            <Form @submit="handleRegister" :validation-schema="schema">
                <div v-if="!successful">
                    <div class="form-group mb-6">
                        <div class="relative">
                            <span class="absolute inset-y-0 left-0 pl-3 text-gray-400 flex items-center text-xl leading-5">
                                <font-awesome-icon icon="id-card"/>
                            </span>
                            <Field class="form-control block w-full px-10 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-b-gray-300 transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-b-blue-600 focus:outline-none focus:shadow-2xl" name="pseudo" id="pseudo" type="text" placeholder="Pseudo" />
                        </div>
                        <ErrorMessage name="pseudo" class="text-sm text-red-500 error-feedback"/>
                    </div>
                    <div class="form-group mb-6">
                        <div class="relative">
                            <span class="absolute inset-y-0 left-0 pl-3 text-gray-400 flex items-center text-xl leading-5">
                                <font-awesome-icon icon="user"/>
                            </span>
                            <Field class="form-control block w-full px-10 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-b-gray-300 transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-b-blue-600 focus:outline-none focus:shadow-2xl" name="email" id="email" type="email" placeholder="Adresse mail" />
                        </div>
                        <ErrorMessage name="email" class="text-sm text-red-500 error-feedback"/>
                    </div>
                    <div class="form-group mb-6">
                        <div class="relative">
                            <span class="absolute inset-y-0 left-0 pl-3 text-gray-400 flex items-center text-xl leading-5">
                                <font-awesome-icon icon="key"/>
                            </span>
                            <Field class="form-control block w-full px-10 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-b-gray-300 transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-b-blue-600 focus:outline-none focus:shadow-2xl" name="password" id="password" :type="show ? 'password' : 'text'" placeholder="Mot de passe" />
                            <span class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                <font-awesome-icon @click="show = !show" :class="{'hidden': !show, 'block':'show'}" icon="eye"/>
                                <font-awesome-icon @click="show = !show" :class="{'block': !show, 'hidden':'show'}" icon="eye-slash"/>
                            </span>
                        </div>
                        <ErrorMessage name="password" class="text-sm text-red-500 error-feedback"/>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="bg-sky-700 w-full hover:bg-sky-500 border-b-4 border-sky-900 text-white font-bold py-2 px-4 hover:border-sky-600 rounded" :disabled="loading">
                            <!-- <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg> -->
                            <span class="uppercase">Cr&eacute;er son compte</span>
                        </button>
                    </div>
                </div>
            </Form>

            <div v-if="message" class="border px-4 py-3 rounded relative" :class="successful ? 'bg-green-100 border-green-400 text-green-600' : 'bg-red-100 border-red-400 text-red-600'">
                {{ message }}
            </div>
            <div class="mt-6">
                <p class="text-right"> Vous avez d&eacute;j&agrave; un compte ? <router-link to="/admin/login" class="text-blue-500 hover:text-blue-700 hover:font-bold">Connectez-vous !</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
    name: "RegisterView",
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data() {
        const schema = yup.object().shape({
            name: yup
                .string()
                .required("Le nom est requis.")
                .min(4, "Doit contenir au moins 4 caracteres!")
                .max(15, "Doit contenir au plus 15 caracteres!"),
            surname: yup
                .string()
                .required("Le prenom est requis.")
                .min(4, "Doit contenir au moins 4 caracteres!")
                .max(15, "Doit contenir au plus 15 caracteres!"),
            email: yup
                .string()
                .required("L'adresse mail est requise.")
                .email("L'adresse mail est invalide.")
                .max(70, "Doit contenir au plus 70 caracteres!"),
            password: yup
                .string()
                .required("Le mot de passe est requis.")
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                    "Doit contenir au moins 8 caracteres, une majuscule(A-Z), une minuscule(a-z), un chiffre et un caractere parmi les suivants : ! @ # $ % ^ & *."
                ),
                // .min(8, "Doit contenir au moins 8 caracteres!")
                // .max(35, "Doit contenir au plus 35 caracteres!"),
        });

        return {
            successful: false,
            loading: false,
            message: "",
            show : true,
            schema,
        }
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
    },
    mounted() {
        if(this.loggedIn) {
            // this.$router.push("/admin");
        }
    },
    methods: {
        handleRegister(admin) {
            this.message = "";
            this.successful = false;
            this.loading = true;

            this.$store.dispatch("auth/register", admin).then(
                (data) => {
                    this.message = data.message;
                    this.successful = true;
                    this.loading = false;
                    this.$router.push("/admin/login");
                },
                (error) => {
                    this.message =
                        (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                        error.message ||
                        error.toString();
                    this.successful = false;
                    this.loading = false;
                }
            );
        },
    },
};
</script>

<style scoped></style>