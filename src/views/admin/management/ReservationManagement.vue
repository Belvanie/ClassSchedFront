<template>
    <BasicLayout>
        <template v-slot:main-title>
            <h1 class="text-center fs-3">R&eacute;servations de salle</h1>
        </template>
        <template v-slot:main-content>
            <div class="row reservation-section">
                <div class="col-12">
                    <div class="row reservations fw-bolder">
                        <div class="col-2 d-flex align-items-center">Lorem Ipsum <font-awesome-icon icon="circle" class="new-dot"></font-awesome-icon></div>
                        <div class="col-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div class="col-2 d-flex justify-content-end">12/05-2023</div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row reservations fw-bolder">
                        <div class="col-2 d-flex align-items-center">Lorem Ipsum <font-awesome-icon icon="circle" class="new-dot"></font-awesome-icon></div>
                        <div class="col-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div class="col-2 d-flex justify-content-end">12/05-2023</div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row reservations fw-bolder">
                        <div class="col-2 d-flex align-items-center">Lorem Ipsum <font-awesome-icon icon="circle" class="new-dot"></font-awesome-icon></div>
                        <div class="col-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div class="col-2 d-flex justify-content-end">12/05-2023</div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row reservations">
                        <div class="col-2">Lorem Ipsum</div>
                        <div class="col-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div class="col-2 d-flex justify-content-end">12/05-2023</div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row reservations">
                        <div class="col-2">Lorem Ipsum</div>
                        <div class="col-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div class="col-2 d-flex justify-content-end">12/05-2023</div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row reservations">
                        <div class="col-2">Lorem Ipsum</div>
                        <div class="col-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div class="col-2 d-flex justify-content-end">12/05-2023</div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row reservations">
                        <div class="col-2">Lorem Ipsum</div>
                        <div class="col-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div class="col-2 d-flex justify-content-end">12/05-2023</div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row reservations fw-bolder" type="button" data-bs-toggle="modal" data-bs-target="#mymodal">
                        <div class="col-2 d-flex align-items-center">Lorem Ipsum <font-awesome-icon icon="circle" class="new-dot"></font-awesome-icon></div>
                        <div class="col-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div class="col-2 d-flex justify-content-end">12/05-2023</div>
                    </div>
                    <!-- Modal -->
                    <div class="modal fade" id="mymodal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="title" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="title">Reservation</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div><span class="fw-bolder">Demandeur:</span> <span>Lorem</span></div>
                                    <div><span class="fw-bolder">Salle:</span><span>Lorem</span></div>
                                    <div><span class="fw-bolder">Plage horaire:</span> <span>Lorem</span> <span>Lorem</span></div>
                                    <div><span class="fw-bolder">Motif :</span> <span>Lorem</span></div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-outline-danger"> <!-- data-bs-dismiss="modal" -->
                                        <font-awesome-icon icon="thumbs-down"></font-awesome-icon> Refuser
                                    </button>
                                    <button type="button" class="btn btn-success">
                                        <font-awesome-icon icon="thumbs-up"></font-awesome-icon> Approuver
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row reservations">
                        <div class="col-2">Lorem Ipsum</div>
                        <div class="col-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div class="col-2 d-flex justify-content-end">12/05-2023</div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row reservations">
                        <div class="col-2">Lorem Ipsum</div>
                        <div class="col-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div class="col-2 d-flex justify-content-end">12/05-2023</div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row reservations">
                        <div class="col-2">Lorem Ipsum</div>
                        <div class="col-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div class="col-2 d-flex justify-content-end">12/05-2023</div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-12">A</div>
                </div>
                <div class="py-5 justify-content-center align-items-center">
                    <Form @submit="handleLogin" :validation-schema="schema">
                        <div class="row mb-3">
                            <div class="d-flex align-items-center position-relative">
                                <span class="position-absolute px-3">
                                    <font-awesome-icon icon="user"></font-awesome-icon>
                                </span>
                                <Field class="form-control px-5" name="login" id="login" placeholder="Login"/>
                            </div>
                            <ErrorMessage name="login" class="text-danger mt-2 error-field"/>
                        </div>
                        <div class="row mb-3">
                            <div class="d-flex align-items-center position-relative">
                                <span class="position-absolute px-3">
                                    <font-awesome-icon icon="key"></font-awesome-icon>
                                </span>
                                <Field class="form-control px-5" type="password" name="password" id="password" placeholder="Mot de passe"/>
                                <span class="position-absolute end-0 px-4">
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
                                <span class="text-uppercase fw-bolder fs-6">Connexion</span>
                            </button>
                        </div>
                        <div class="form-group">
                            <div v-if="message" class="bg-red-100 border border-danger text-danger px-4 py-3 rounded">
                                {{ message }}
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </template>
    </BasicLayout>
</template>

<script>
import BasicLayout from '@/components/BasicLayout.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

export default {
    name: 'ReservationManagement',
    components: {
        Form,
        Field,
        ErrorMessage,
        BasicLayout
    },
    data() {
        const schema = yup.object().shape({
            debut: yup.string().required("L'heure de debut est requise."),
            fin: yup.string().required("L'heure de fin est requise."),
            motif: yup.string().required("Le motif est requis.")
        });

        return {
            loading: false,
            message: "",
            show: true,
            schema,
        }
    },
    mounted() {},
    created() {},
    computed: {},
    methods: {}
}
</script>

<style scoped>
.reservation-section {
    background-color: #f1f1f1;
    /* padding: 1% 2%; */
    margin: 3%;
    border-radius: 5px;
}

.reservations {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #cfcfcf;
    padding: 0.7%;
}

.new-dot {
    font-size: 0.6rem;
    color: #f73b66;
    margin-left: 5%;
}
</style>