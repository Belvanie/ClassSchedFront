<template>
    <basic-layout>
        <template v-slot:main-title>
            <h1 class="text-center fs-4">Gestion des niveaux</h1>
        </template>
        <template v-slot:main-content>
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-center">
                        <router-link to="/admin/levels/create" class="mx-2 text-decoration-none">
                            Cr&eacute;er un niveau
                        </router-link>
                        <router-link to="/admin/levels/update" class="mx-2 text-decoration-none">
                            Modifier un niveau
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
    name: "LevelManagement",
    components: {
        BasicLayout
    }
}
</script>