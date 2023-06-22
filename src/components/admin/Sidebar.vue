<template>
    <ul class="list-group list-group-flush text-center h-100">
        <li class="list-group-item side-items w-100 ">
            <router-link to="/admin/time-table" class="text-white text-decoration-none">
                <font-awesome-icon icon="calendar-days" class="fs-5"></font-awesome-icon>
                <div class="font-monospace sub-text text-break">Emploi de temps</div>
            </router-link>
        </li>
        <li class="list-group-item side-items text-center">
            <router-link to="/admin/reservations" class="text-white text-decoration-none">
                <font-awesome-icon icon="calendar-check" class="fs-5"></font-awesome-icon>
                <div class="font-monospace sub-text text-break">R&eacute;servations</div>
            </router-link>
        </li>
        <li class="list-group-item side-items text-center">
            <router-link to="/admin/classrooms" class="text-white text-decoration-none">
                <font-awesome-icon icon="chalkboard-teacher" class="fs-5"></font-awesome-icon>
                <div class="font-monospace sub-text text-break">Salles</div>
            </router-link>
        </li>
        <li class="list-group-item side-items text-center">
            <router-link to="/admin/departments" class="text-white text-decoration-none">
                <font-awesome-icon icon="school" class="fs-5"></font-awesome-icon>
                <div class="font-monospace sub-text text-break">D&eacute;partements</div>
            </router-link>
        </li>
        <li class="list-group-item side-items text-center">
            <router-link to="/admin/filieres" class="text-white text-decoration-none">
                <font-awesome-icon icon="clipboard-list" class="fs-5"></font-awesome-icon>
                <div class="font-monospace sub-text text-break">Fili&egrave;res</div>
            </router-link>
        </li>
        <li class="list-group-item side-items text-center">
            <router-link to="/admin/levels" class="text-white text-decoration-none">
                <font-awesome-icon icon="book-open-reader" class="fs-5"></font-awesome-icon>
                <div class="font-monospace sub-text text-break">Niveaux</div>
            </router-link>
        </li>
        <li class="list-group-item side-items text-center">
            <router-link to="/admin/options" class="text-white text-decoration-none">
                <font-awesome-icon icon="filter" class="fs-5"></font-awesome-icon>
                <div class="font-monospace sub-text text-break">Options</div>
            </router-link>
        </li>
        <li class="list-group-item side-items border-bottom text-center">
            <router-link to="/admin/courses" class="text-white text-decoration-none">
                <font-awesome-icon icon="envelope" class="fs-5"></font-awesome-icon><br/>
                <span class="font-monospace sub-text text-break">UEs</span>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'SideBar',
    components: {}
}
</script>

<style scoped>
.side-items {
  background-color: #4e1bad;
  color: #fff;
}

.side-items:hover {
  background-color: #f73b66;
}

.sub-text {
    font-size: 0.7rem;
    font-weight: bolder;
}
</style>