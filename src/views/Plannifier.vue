<template>
    
    <h2>Management des emplois de temps</h2>
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
    <time-table-edit :initial-data="initialData" @selected-data-changed="handleSelectedDataChange" class="w-75 m-auto"></time-table-edit>
    <!-- ... le reste du code ... -->
</template>
  
  <script>
  import TimeTableEdit from './components/TimeTableEdit.vue';
  import { toRaw } from 'vue';
  
  export default {
    components: {
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
        selectedLevel: null
      };
    },
    methods: {
      // ... le reste du code ...

      deleteEmploi() {
        // Logique de suppression de l'option
      },
      confirmEmploi() {
        // Logique de confirmation de l'option
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
  
      // ... le reste du code ...
    },
  };
  </script>
  
<style>
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
</style>