<template>
    <CreationForm 
        :codeLabel="'Code du niveau'"
        :nameLabel="'Nom du niveau'"
        :codeIndex="'ex. L1'"
        :nameIndex="'ex. LICENCE 1'"
        @submit="handleFormSubmit"
    >
        <template v-slot:message>
            <div v-if="message" class="col-12">
                <div :class="successful ? 'border border-success text-success px-4 py-3 rounded' : 'border border-danger text-danger px-4 py-3 rounded'">
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
import adminService from '@/services/admin.service'

export default {
    name: "CreateLevel",
    components: {
        CreationForm
    },
    data() {
        return {
            successful: false,
            loading: false,
            message: "",
            show: true,
        }
    },
    computed: {},
    created() {},
    methods: {
        handleFormSubmit(data) {
            adminService.addLevel(data).then(
                (res) => {
                    this.message = res.data.message
                    this.successful = true
                    this.$router.push("/admin/levels/create")
                },
                (error) => {
                    this.message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
                }
            )
        }
    }
}
</script>

<style scoped></style>