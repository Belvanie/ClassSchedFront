<template>
    <basic-layout>
        <template v-slot:main-title>
            <h1 class="text-center fs-4">Gestion des unit&eacute;s d'enseignement</h1>
        </template>
        <template v-slot:main-content>
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-center">
                        <router-link to="/admin/courses/create" class="mx-2 text-decoration-none">
                            Cr&eacute;er une UE
                        </router-link>
                        <router-link to="/admin/courses/update" class="mx-2 text-decoration-none">
                            Modifier une UE
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
    name: "CourseManagement",
    components: {
        BasicLayout
    }
}
</script>