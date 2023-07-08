<template>
    <CreationForm 
        :codeLabel="'Code de l\'UE'"
        :nameLabel="'Nom de l\'UE'"
        :codeIndex="'ex. PHY 3022'"
        :nameIndex="'ex. Thermodynamique'"
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
import adminService from '@/services/admin.service'

export default {
    name: "CreateCourse",
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
            adminService.addCourse(data).then(
                () => {
                    this.$router.push("/admins/courses/create")
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