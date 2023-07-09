<template>
    <UpdateForm
        :researchLabel="'l\'option'"
        :codeLabel="'Code de l\'option'"
        :nameLabel="'Nom de l\'option'"
        :codeIndex="'ex. SIGL'"
        :nameIndex="'ex. Syst&egrave;mes d\'information et g&eacute;nie logiciel'"
        @submit="handleFormSubmit"
    >
        <template v-slot:message>
            <div v-if="message" class="col-12">
                <div class="border border-danger text-danger px-4 py-3 rounded">
                    {{ message }}
                </div>
            </div>
        </template>
        <template v-slot:research>
            <span class="input-group-text" type="submit">
                <font-awesome-icon icon="search"></font-awesome-icon>
            </span>
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
    </UpdateForm>
</template>

<script>
import UpdateForm from '@/components/admin/UpdateForm.vue'

export default {
    name: "UpdateOption",
    components: {
        UpdateForm,
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