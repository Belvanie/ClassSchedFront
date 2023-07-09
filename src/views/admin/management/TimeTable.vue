<template>
    <basic-layout>
        <template v-slot:main-title>
            <h1 class="text-center fs-4 mb-16">Management des emplois de temps</h1>
        </template>

        <template v-slot:main-content>
            
            <v-alert
                v-if="isSuccess"
                dismissible
                type="success"
                prominent
                :class="{ 'fade-enter-active': isSuccess, 'fade-leave-active': !isSuccess }"
                class="alert-width position-fixed top-0 start-50 translate-middle-x mt-10"
                @input="dismissAlert"
            >
                Succès ! Votre opération a été effectuée avec succès.
            </v-alert>
            
            <v-alert
                v-if="isError"
                dismissible
                type="error"
                prominent
                :class="{ 'fade-enter-active': !isError, 'fade-leave-active': isError }"
                class="alert-width position-fixed top-0 start-50 translate-middle-x mt-10"
                @input="dismissAlert"
            >
                Erreur ! Une erreur s'est produite lors de l'opération.
            </v-alert>

            <div class="menu-container">
            <div class="select-container">
                <v-select
                v-model="selectedTeacher"
                :items="teachers"
                :hint="selectedTeacher ? `${selectedTeacher}` : ''"
                persistent-hint
                item-title = "text"
                item-value = "value"
                label="Enseignant"
                variant="solo"
                class="w-25 mr-2"
                ></v-select>

                <v-select
                v-model="selectedOption"
                :items="options"
                :hint="selectedOption ? `${selectedOption}` : ''"
                persistent-hint
                item-title = "text"
                item-value = "value"
                label="Option"
                variant="solo"
                class="w-25 mr-2"
                ></v-select>

                <v-select
                v-model="selectedMajor"
                :items="majors"
                :hint="selectedMajor ? `${selectedMajor}` : ''"
                persistent-hint
                item-title = "text"
                item-value = "value"
                label="Filière"
                variant="solo"
                class="w-25 mr-2"
                ></v-select>

                <v-select
                v-model="selectedLevel"
                :items="levels"
                :hint="selectedLevel ? `${selectedLevel}` : ''"
                persistent-hint
                item-title = "text"
                item-value = "value"
                label="Niveau"
                variant="solo"
                class="w-25"
                ></v-select>
            </div>

            <div class="button-container mr-sm-12">
                <v-btn class="mr-sm-16" icon color="red" @click="deleteEmploi">
                <v-icon>mdi-delete</v-icon>
                </v-btn>

                <v-btn class="mr-sm-16" icon color="green" @click="confirmEmploi">
                <v-icon>mdi-check</v-icon>
                </v-btn>
            </div>
            </div>
            <time-table-edit :initial-data="initialData" @selected-data-changed="handleSelectedDataChange" v-if="!isLoading" class="w-75 m-auto"></time-table-edit>
            
            <div class="loader-container mt-16">

                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <v-progress-circular
                    v-if="isLoading"
                    indeterminate
                    color="primary"
                ></v-progress-circular>

                <!-- Contenu de votre application -->
            </div>
            <!-- ... le reste du code ... -->
        </template>
    </basic-layout>
</template>

<script>
    import BasicLayout from "@/components/BasicLayout.vue"

    import TimeTableEdit from '@/components/admin/TimeTableEdit.vue'
    import { toRaw } from 'vue'

    export default {
        name: "TimeTable",
        components: {
            BasicLayout,
            TimeTableEdit,
        },
        data() {
            return {
                initialData: {
                    // Les données initiales de l'emploi du temps
                    '7:00': {
                        Lundi: { ue: 'MAT141', teacher: 'enseignant1@example.com', room: 'S006' },
                        Jeudi: { ue: 'INF4065', teacher: 'enseignant2@example.com', room: 'S006' },
                        // ... autres jours de la semaine
                    },
                    '8:00': {
                        Lundi: { ue: 'PHY245', teacher: 'enseignant2@example.com', room: 'AIII' },
                        Mardi: { ue: 'MAT122', teacher: 'enseignant2@example.com', room: 'AI' },
                        // ... autres jours de la semaine
                    },
                    // ... autres heures de la journée
                },
                parentSelectedData: [], // Ajoutez une propriété pour stocker la matrice selectedData du composant enfant
                teachers: [
                { text: 'Enseignant 1', value: 'teacher1' },
                { text: 'Enseignant 2', value: 'teacher2' },
                { text: 'Enseignant 3', value: 'teacher3' }
                ],
                options: [
                { text: 'Option 1', value: 'option1' },
                { text: 'Option 2', value: 'option2' },
                { text: 'Option 3', value: 'option3' }
                ],
                majors: [
                { text: 'Filière 1', value: 'major1' },
                { text: 'Filière 2', value: 'major2' },
                { text: 'Filière 3', value: 'major3' }
                ],
                levels: [
                { text: 'Niveau 1', value: 'level1' },
                { text: 'Niveau 2', value: 'level2' },
                { text: 'Niveau 3', value: 'level3' }
                ],
                selectedTeacher: null,
                selectedOption: null,
                selectedMajor: null,
                selectedLevel: null,
    
                isLoading: false, // Variable indiquant si le chargement est en cours
                isSuccess: false, // Variable indiquant si l'opération a réussi
                isError: false, // Variable indiquant si l'opération a réussi
            };
        },
        methods: {
            // ... le reste du code ...

            deleteEmploi() {
                this.isLoading = true; // Début du chargement au clic sur le bouton "Valider"

                // Effectuez ici votre logique de traitement ou d'appel à l'API

                // Simulez une pause de 2 secondes avant de terminer le chargement
                setTimeout(() => {
                    this.isLoading = false; // Fin du chargement après un délai simulé
                    this.isSuccess = true; // Affiche l'alerte de succès

                    // Masque l'alerte de succès après 3 secondes (ajustez selon vos besoins)
                    setTimeout(() => {
                        this.isSuccess = false;
                    }, 3000);
                }, 2000);
                // Logique de suppression de l'emploi
            },
            confirmEmploi() {
                this.isLoading = true; // Début du chargement au clic sur le bouton "Valider"

                // Effectuez ici votre logique de traitement ou d'appel à l'API

                // Simulez une pause de 2 secondes avant de terminer le chargement
                setTimeout(() => {
                    this.isLoading = false; // Fin du chargement après un délai simulé
                    this.isSuccess = true; // Affiche l'alerte de succès

                    // Masque l'alerte de succès après 3 secondes (ajustez selon vos besoins)
                    setTimeout(() => {
                        this.isSuccess = false;
                    }, 3000);
                }, 2000);
            
                // Logique de confirmation de l'emploi
            },

            handleSelectedDataChange(selectedData) {
                // Mettez à jour la propriété parentSelectedData avec la matrice selectedData du composant enfant
                this.parentSelectedData = toRaw(selectedData);

                // Vérifiez si rawData est bien un tableau
                if (Array.isArray(this.parentSelectedData)) {
                    // Accédez à la ligne d'indice 3 et à la colonne 2 de la matrice
                    console.log(`Enseignant : ${this.parentSelectedData[0][2].teacher} - UE : ${this.parentSelectedData[0][2].ue} - Salle : ${this.parentSelectedData[0][2].room}`);
                }
                this.initialData = selectedData;
            },

            dismissAlert() {
                // Masque l'alerte de succès si l'utilisateur la ferme manuellement
                this.isSuccess = false;
            },
        
            // ... le reste du code ...
        },
    }
</script>



<style scoped>
    .select-container {
        display: flex;
        width: 594px;
        margin: auto;
    }

    .menu-container {
        display: flex;
    }

    .button-container {
        display: flex;
    }

    .loader-container {
        position: relative;
        height: 100%;
    }

    .v-progress-circular {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }


    .fade-transition-enter-active,
    .fade-transition-leave-active {
        transition: opacity 0.5s;
    }

    .fade-transition-enter,
    .fade-transition-leave-to {
        opacity: 0;
    }
    .alert-width {
        max-width: 33.33%; /* 4 colonnes sur 12 */
        z-index: 9999;
    }

</style>