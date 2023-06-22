<template>
    <div class="row py-5">
        <div class="col-2"></div>
        <div class="col-8 px-5">
            <!-- Creation form -->
            <div class="border border-2 py-3">
                <p class="fw-bolder mx-3">Les champs marqu&eacute;s d'un (<span class="text-danger">*</span>) sont obligatoires</p>
                <Form @submit="handleCreation" class="pt-3 mx-5 px-5" :validation-schema="schema">
                    <div class="form-group row g-3 mb-2">
                        <div class="col-12 col-md-4">
                            <label class="col-form-label">Code de l'option</label>
                        </div>
                        <div class="col-12 col-md-4">
                            <Field class="form-control" name="code" id="code"/>
                            <span class="form-text">
                                ex. SIGL
                            </span>
                        </div>
                        <div class="col-12 col-md-4">
                            <ErrorMessage name="code" class="text-danger"/>
                        </div>
                    </div>
                    <div class="form-group row g-3 mb-3">
                        <div class="col-12 col-md-4">
                            <label class="col-form-label">Nom de l'option</label>
                        </div>
                        <div class="col-12 col-md-4">
                            <Field type="text" class="form-control" name="name" id="name"/>
                            <span class="form-text">
                                ex. Syst&egrave;mes d'information et g&eacute;nie logiciel
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
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

export default {
    name: "CreateClassroom",
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data() {
        const schema = yup.object().shape({
            code: yup.string().required("Le code de l'option est requis."),
            name: yup.string().required("Le nom de l'option est requis."),
        })

        return {
            loading: false,
            message: "",
            show: true,
            schema,
        }
    },
    computed: {},
    created() {},
    methods: {
        handleCreation(data) {
            this.loading = false
            this.$store.dispatch("", data).then(
                () => {
                    this.$router.push("/admin/classrooms/create")
                },
                (error) => {
                    this.loading = false
                    this.message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString;
                }
            )
        }
    }
}
</script>