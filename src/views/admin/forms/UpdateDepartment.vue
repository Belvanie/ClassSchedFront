<template>
    <div class="row p-5">
        <div v-if="message" class="col-12">
            <div class="border border-danger text-danger px-4 py-3 rounded">
                {{ message }}
            </div>
        </div>
        <div class="col-12">
            <div class="row py-5">
                <div class="col-2"></div>
                <div class="col-8 px-5">
                    <!-- Research field -->
                    <div class="row mb-5">
                        <div class="col-6 p-0">
                            <form class="container-fluid">
                                <div class="input-group">
                                    <input type="text" class="form-control d-inline-flex" placeholder="Rechercher le d&eacute;partement">
                                    <span class="input-group-text" type="submit">
                                        <font-awesome-icon icon="search"></font-awesome-icon>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- Creation form -->
                    <div class="border border-2 py-3">
                        <p class="fw-bolder mx-3">Les champs marqu&eacute;s d'un (<span class="text-danger">*</span>) sont obligatoires</p>
                        <Form @submit="handleCreation" class="pt-3 mx-5 px-5" :validation-schema="schema">
                            <div class="form-group row g-3 mb-2">
                                <div class="col-12 col-md-4">
                                    <label class="col-form-label">Code du d&eacute;partement</label>
                                </div>
                                <div class="col-12 col-md-4">
                                    <Field class="form-control" name="code" id="code"/>
                                    <span class="form-text">
                                        ex. INF
                                    </span>
                                </div>
                                <div class="col-12 col-md-4">
                                    <ErrorMessage name="code" class="text-danger"/>
                                </div>
                            </div>
                            <div class="form-group row g-3 mb-3">
                                <div class="col-12 col-md-4">
                                    <label class="col-form-label">Nom du d&eacute;partement</label>
                                </div>
                                <div class="col-12 col-md-4">
                                    <Field type="text" class="form-control" name="name" id="name"/>
                                    <span class="form-text">
                                        ex. INFORMATIQUE
                                    </span>
                                </div>
                                <div class="col-12 col-md-4">
                                    <ErrorMessage name="name" class="text-danger"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-grad">Confirmer</button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div class="col-2"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
// import * as yup from 'yup'

export default {
    name: "UpdateClassroom",
    components: {
        Form,
        Field,
        ErrorMessage
    }
}
</script>