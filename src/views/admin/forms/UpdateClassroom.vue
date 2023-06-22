<template>
    <div class="row py-5">
        <div class="col-2"></div>
        <div class="col-8 px-5">
            <!-- Research field -->
            <div class="row mb-5">
                <div class="col-6 p-0">
                    <form class="container-fluid">
                        <div class="input-group">
                            <input type="text" class="form-control d-inline-flex" placeholder="Rechercher la salle">
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
                    <div class="d-block">
                        <div class="row g-3 mb-2">
                            <div class="col-auto">
                                <label class="col-form-label">Code de la salle</label>
                            </div>
                            <div class="col-auto">
                                <Field class="form-control" name="code" id="code"/>
                                <span class="form-text">
                                    ex. A135, S006
                                </span>
                            </div>
                            <ErrorMessage name="code" class="col-auto fs-1xl text-danger"/>
                        </div>
                        <div class="row g-3 mb-2">
                            <div class="col-auto">
                                <label class="col-form-label">Nom de la salle</label>
                            </div>
                            <div class="col-auto">
                                <Field type="text" class="form-control" name="name" id="name"/>
                                <span class="form-text">
                                    ex. AMPHI 1003
                                </span>
                            </div>
                            <ErrorMessage name="name" class="col-auto fs-1xl text-danger"/>
                        </div>
                    </div>
                    <div class="d-flex justify-content-start">
                        <button type="submit" class="btn btn-grad">Confirmer</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-2"></div>
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