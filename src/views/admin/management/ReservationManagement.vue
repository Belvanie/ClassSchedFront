<template>
    <BasicLayout>
        <template v-slot:main-title>
            <h1 class="text-center fs-4">R&eacute;servations de salle</h1>
        </template>
        <template v-slot:main-content>
            <div class="col-12 p-5">
                <div class="row reservation-section">
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
                <div class="row">
                    <p>Faites une r&eacute;servation de salle</p>
                    <p>Remplissez le formulaire ci-dessous pour demander une salle</p>
                    <div class="border border-2 py-3">
                        <p class="fw-bolder mx-3">Les champs marqu&eacute;s d'un (<span class="text-danger">*</span>) sont obligatoires</p>
                        <Form @submit="handleCreation" class="pt-3 mx-5 px-5" :validation-schema="schema">
                            <div>
                                <div class="row g-3 mb-2">
                                    <div class="col-4">
                                        <label class="col-form-label">Quelle salle voulez-vous r&eacute;server ?</label>
                                    </div>
                                    <div class="col-4">
                                        <Field class="form-control" name="salle" id="salle" as="select">
                                            <option value="">Salle</option>
                                        </Field>
                                    </div>
                                    <ErrorMessage name="salle" class="col-4 fs-1xl text-danger"/>
                                </div>
                                <div class="row g-3 mb-2">
                                    <div class="col-4">
                                        <label class="col-form-label">&Agrave; quelle date voulez-vous r&eacute;server cette salle ?</label>
                                    </div>
                                    <div class="col-4">
                                        <Field type="text" class="form-control" name="date" id="date"/>
                                        <span class="form-text d-flex justify-content-end">
                                            <i>DD/MM/YYYY</i>
                                        </span>
                                    </div>
                                    <ErrorMessage name="date" class="col-4 fs-1xl text-danger"/>
                                </div>
                                <div class="row g-3 mb-2">
                                    <div class="col-4">
                                        <label class="col-form-label">Heure de d&eacute;but</label>
                                    </div>
                                    <div class="col-4">
                                        <Field type="text" class="form-control" name="debut"/>
                                        <span class="form-text d-flex justify-content-end">
                                            <i>HH:MM</i>
                                        </span>
                                    </div>
                                    <ErrorMessage name="debut" class="col-4 fs-1xl text-danger"/>
                                </div>
                                <div class="row g-3 mb-2">
                                    <div class="col-4">
                                        <label class="col-form-label">Heure de fin</label>
                                    </div>
                                    <div class="col-4">
                                        <Field type="text" class="form-control" name="fin"/>
                                        <span class="form-text d-flex justify-content-end">
                                            <i>HH:MM</i>
                                        </span>
                                    </div>
                                    <ErrorMessage name="date" class="col-4 fs-1xl text-danger"/>
                                </div>
                                <div class="row g-3 mb-2">
                                    <div class="col-4">
                                        <label class="col-form-label">Pour quelle raison voulez-vous r&eacute;server cette salle ?</label>
                                    </div>
                                    <div class="col-4">
                                        <Field name="motif" v-slot="{ motif }">
                                            <textarea v-bind="motif" class="form-control" id="motif" cols="30" rows="5"></textarea>
                                        </Field>
                                    </div>
                                    <ErrorMessage name="date" class="col-4 fs-1xl text-danger"/>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-grad">Confirmer</button>
                        </form>
                    </div>
                </div>
            </div>
        </template>
    </BasicLayout>
</template>

<script>
import BasicLayout from '@/components/BasicLayout.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import adminService from '@/services/admin.service'

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
    methods: {
        handleFormSubmit(data) {
            console.log(data)
            adminService.addReservation(data).then(
                () => {
                    this.$router.push("/admin/reservations")
                },
                (error) => {
                    this.message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
                }
            )
        }
    }
}
</script>

<style scoped>
.reservation-section {
    background-color: #f1f1f1;
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