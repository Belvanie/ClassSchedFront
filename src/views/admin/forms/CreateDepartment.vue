<template>
    <CreationForm 
        :codeLabel="'Code du d&eacute;partement'"
        :nameLabel="'Nom du d&eacute;partement'"
        :codeIndex="'ex. BCH'"
        :nameIndex="'ex. BIOCHIMIE'"
        @submit="handleFormSubmit"
    >
        <template v-slot:message>
            <div v-if="message" class="col-12">
                <div class="border border-danger text-danger px-4 py-3 rounded">
                    {{ message }}
                </div>
            </div>
        </template>
        <template v-slot:validation>
            <div class="form-group row">
                <div class="col-md-4 d-none d-md-block"></div>
                <div class="col-12 col-md-4">
                    <button type="submit" class="btn btn-grad w-100">Confirmer</button>
                </div>
                <div class="col-md-4 d-none d-md-block"></div>
            </div>
        </template>
    </CreationForm>
</template>

<script>
import CreationForm from '@/components/admin/CreationForm.vue'

export default {
    name: "CreateDepartment",
    components: {
        CreationForm
    },
    data() {
        return {
            loading: false,
            message: "",
            show: true,
        }
    },
    computed: {},
    created() {},
    methods: {
        handleFormSubmit(data) {
            console.log(data)
        }
    }
}
</script>

<style scoped></style>