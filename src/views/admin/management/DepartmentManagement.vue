<template>
    <basic-layout>
        <template v-slot:main-title>
            <h1 class="text-center fs-4">Gestion des d&eacute;partements</h1>
        </template>
        <template v-slot:main-content>
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-center">
                        <router-link to="/admin/departments/create" class="mx-2 text-decoration-none">
                            Cr&eacute;er un d&eacute;partement
                        </router-link>
                        <router-link to="/admin/departments/update" class="mx-2 text-decoration-none">
                            Modifier un d&eacute;partement
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="row">
                <router-view/>
            </div>
        </template>
    </basic-layout>
</template>

<script>
import BasicLayout from "@/components/BasicLayout.vue"

export default {
    name: "DepartmentManagement",
    components: {
        BasicLayout
    }
}
</script>