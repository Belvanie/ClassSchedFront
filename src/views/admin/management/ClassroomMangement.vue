<template>
    <basic-layout>
        <template v-slot:main-title>
            <h1 class="text-center fs-4">Gestion des salles</h1>
        </template>
        <template v-slot:main-content>
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-center">
                        <router-link to="/admin/classrooms/create" class="mx-2 text-decoration-none">
                            Cr&eacute;er une salle
                        </router-link>
                        <router-link to="/admin/classrooms/update" class="mx-2 text-decoration-none">
                            Modifier une salle
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
import BasicLayout from '@/components/BasicLayout.vue';

export default {
    name: 'ClassroomManagement',
    components: {
        BasicLayout
    }
}
</script>

<style scoped>
.nav-link {
    color: grey;
}

.nav-link:active {
    border-bottom: 3px solid grey;
}

.nav-link:hover {
    border-bottom: 3px solid grey;
}
</style>