<template>
    <basic-layout>
        <template v-slot:main-title>
            <h1 class="text-center fs-4">Gestion des unit&eacute;s d'enseignement</h1>
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