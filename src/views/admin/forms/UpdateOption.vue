<template>
    <UpdateForm
        :researchLabel="'l\'option'"
        :codeLabel="'Code de l\'option'"
        :nameLabel="'Nom de l\'option'"
        :codeIndex="'ex. SIGL'"
        :nameIndex="'ex. Syst&egrave;mes d\'information et g&eacute;nie logiciel'"
        :codeNewLabel="'Nouveau code de l\'option'"
        :codeNewIndex="'ex. SIGL'"
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
    name: "UpdateOption",
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
            adminService.updateOption(data).then(
                (res) => {
                    this.message = res.data.message
                    this.successful = true
                    this.$router.push("/admin/options/update")
                },
                (error) => {
                    this.message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
                }
            )
        }
    }
}
</script>