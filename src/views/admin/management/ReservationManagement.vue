<template>
    <BasicLayout>
        <template v-slot:main-title>
            <h1 class="text-center fs-4">R&eacute;servations de salle</h1>
        </template>
        <template v-slot:main-content>
            <div>
            <br>
            <p class="text-h6 text-grey-darken-1 w-75 text-left m-auto">Faites une réservation de salle</p>
            <br>
            <p class="text-block alert alert-danger text-body-1 w-50 text-left m-auto">
                <span class="font-weight-bold">Attention</span> ! vous ne pouvez pas faire de demande de réservation pour une salle, à une même heure déjà réservée.
            </p>
            <h1 class="text-h6 w-75 text-left m-auto">Remplissez le formulaire ci-dessous pour demander une salle</h1>

            <div class="d-flex justify-center pr-16 w-100">

                <form class="block-reservation text-left mt-15 mr-lg-16 ml-lg-n16 p-5 border w-50 row">
                <div class="container">
                    <p class="text-body-1 font-weight-bold col-md-10">Les champs marqués d’un (<span class="font-weight-bold text-danger">*</span>) sont obligatoires</p>

                    <div class="form-group">
                    <label class="text-grey font-weight-bold" for="salle">Quelle salle voulez-vous réserver ? <span class="font-weight-bold text-danger">*</span></label>
                    <select id="salle" class="form-control" v-model="selectedSalle">
                        <option value="">Salle</option>
                        <option value="salle1">Salle 1</option>
                        <option value="salle2">Salle 2</option>
                        <option value="salle3">Salle 3</option>
                    </select>
                    </div>

                    <div class="form-group">
                    <label class="text-grey font-weight-bold mt-10" for="date_reservation">A quelle date voulez-vous réserver cette salle ? <span class="font-weight-bold text-danger">*</span></label>
                    <input type="date" id="date_reservation" class="form-control" v-model="selectedDate" required>
                    </div>

                    <div class="form-group">
                    <label class="text-grey font-weight-bold mt-10" for="heure_debut">Heure de début <span class="font-weight-bold text-danger">*</span></label>
                    <input type="text" id="heure_debut" class="form-control" v-model="selectedHeureDebut" required>
                    </div>

                    <div class="form-group">
                    <label class="text-grey font-weight-bold mt-10" for="heure_fin">Heure de fin <span class="font-weight-bold text-danger">*</span></label>
                    <input type="text" id="heure_fin" class="form-control" v-model="selectedHeureFin" required>
                    </div>

                    <div class="form-group">
                    <label class="text-grey font-weight-bold mt-10" for="motif">Pour quelle raison souhaitez-vous réserver cette salle ?</label>
                    <textarea id="motif" class="form-control" v-model="motif"></textarea>
                    </div>

                    <input type="submit" value="Confirmer" class="btn btn-grad text-white w-50 mt-10">
                </div>
                </form>

            </div>
            </div>
            <!-- ... le reste du code ... -->
        </template>
    </BasicLayout>
</template>

<script>
    import BasicLayout from '@/components/BasicLayout.vue'
    import { Form, Field, ErrorMessage } from 'vee-validate'
    import adminService from '@/services/admin.service'

    export default {
        name: 'ReservationManagement',
        components: {
            Form,
            Field,
            ErrorMessage,
            BasicLayout
        },
        data() {
            return {
                selectedSalle: '',
                selectedDate: '',
                selectedHeureDebut: '',
                selectedHeureFin: '',
                motif: ''
            };
        },
        mounted() {},
        created() {},
        computed: {},
        methods: {
            // ... le reste du code ...

            newReservation() {
                // Logique de suppression de l'option
            },
        },
    }
</script>

<style scoped>
.reservation-section {
    background-color: #f1f1f1;
    border-radius: 5px;
}

.reservations {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #cfcfcf;
    padding: 0.7%;
}

.new-dot {
    font-size: 0.6rem;
    color: #f73b66;
    margin-left: 5%;
}
</style>