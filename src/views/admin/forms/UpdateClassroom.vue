<template>
    <UpdateForm
        :researchLabel="'la salle'"
        :codeLabel="'Code de la salle'"
        :nameLabel="'Nom de la salle'"
        :codeIndex="'ex. A135, S006'"
        :nameIndex="'ex. AMPHI 1003'"
        :codeNewLabel="'Nouveau code de la salle'"
        :codeNewIndex="'ex. S115'"
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
        <template v-slot:deletion>
            <span class="text-danger">
                <font-awesome-icon icon="trash" @click="handleDelete"></font-awesome-icon>
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
    name: "UpdateClassroom",
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
            adminService.updateClassroom(data).then(
                (res) => {
                    this.message = res.data.message || "Succes"
                    this.successful = true
                    this.$router.push("/admin/classrooms/update")
                },
                (error) => {
                    this.message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
                }
            )
        },
        handleDelete() {
            const data = this.$refs.form.formData
            adminService.deleteClassroom(data).then(
                (res) => {
                    if (res.status == 204) {
                        this.message = "Suppression reussie" || res.data.message
                    } else {
                        this.message = res.data.message
                    }
                    this.successful = true
                    this.$router.push("/admin/classrooms/update")
                },
                (error) => {
                    this.message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
                }
            )
        }
    }
}
</script>