<template>
    <UpdateForm
        :researchLabel="'l\'UE'"
        :codeLabel="'Code de l\'UE'"
        :codeNewLabel="'Nouveau code de l\'UE'"
        :nameLabel="'Nom de l\'UE'"
        :codeIndex="'ex. PHY 3022'"
        :codeNewIndex="'ex. PHY 3022'"
        :nameIndex="'ex. Thermodynamique'"
        ref="form"
    >
        <template v-slot:message>
            <div v-if="message" class="col-12">
                <div :class="successful ? 'border border-success text-success px-4 py-3 rounded' : 'border border-danger text-danger px-4 py-3 rounded'">
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
                    <button class="btn btn-grad w-100" @click="handleUpdate">Confirmer</button>
                </div>
                <div class="col-md-4 d-none d-md-block"></div>
            </div>
        </template>
    </UpdateForm>
</template>

<script>
import UpdateForm from '@/components/admin/UpdateForm.vue'
import adminService from '@/services/admin.service'

export default {
    name: "UpdateCourse",
    components: {
        UpdateForm,
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
        handleUpdate() {
            const data = this.$refs.form.formData
            adminService.updateCourse(data).then(
                (res) => {
                    this.message = res.data.message
                    this.successful = true
                    this.$router.push("/admin/courses/update")
                },
                (error) => {
                    this.message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
                }
            )
        }
    }
}
</script>